import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email is required" }, { status: 400 })
    }

    const supabase = await createClient()

    // Insert email into waitlist
    const { data, error } = await supabase.from("waitlist").insert([{ email }]).select()

    if (error) {
      if (error.code === "23505") {
        // Unique constraint violation
        return NextResponse.json({ error: "Email already registered" }, { status: 409 })
      }
      throw error
    }

    // TODO: Send notification email to Gokulakrishnxn@gmail.com
    // This would typically use a service like Resend, SendGrid, or similar
    console.log(`New waitlist signup: ${email}`)
    console.log(`Notify: Gokulakrishnxn@gmail.com`)

    return NextResponse.json({ message: "Successfully added to waitlist", data }, { status: 201 })
  } catch (error) {
    console.error("Waitlist signup error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
