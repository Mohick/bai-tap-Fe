



export default function HomePage() {

  return <div className="relative w-full h-screen overflow-hidden">
    <img

      src="./koi2.png"

      alt="Red Koi fish swimming in water with lilies and round stones illustration on a peach background"
      className="w-full md:w-[1800px] h-auto md:h-[800px] mx-auto object-cover "
    />
    <div className="absolute bottom-6 left-4 md:top-10 md:left-6 md:bottom-auto text-white">
      <h1 className="text-5xl font-bold leading-tight">Red Koi</h1>

      <p className="text-base mt-1 leading-snug max-w-xs">Red Koi ứng dụng quản lý tài chính cá nhân.</p>
    </div>
  </div>
}

