'use client'

export default function AuthButton({
  children,
}: {
  children: React.ReactNode
}) {
  async function handleClick() {
    // here we can use some props to determine if its a registration or sign in,
    // as well as which provider to use
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
      >
        {children}
      </button>
    </div>
  )
}
