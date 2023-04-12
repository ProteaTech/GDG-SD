export default function RootLoading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative h-24 w-24 animate-spin rounded-full bg-gradient-to-r from-secondaryGreen via-secondaryGreen-lighter to-tertiaryGold ">
        <div className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-primaryWhite bg-primaryWhite"></div>
      </div>
    </div>
  )
}
