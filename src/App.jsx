import { useState } from "react"
import { Wheel } from "react-custom-roulette"
import Confetti from "react-confetti"
import { X } from "lucide-react"

const data = [
  { option: "🌟 Terus berjuang, kamu pasti bisa!" },
  { option: "💪 Jangan menyerah, sukses sudah dekat!" },
  { option: "🚀 Setiap usaha kecil berarti besar!" },
  { option: "🔥 Kegagalan adalah bagian dari sukses!" },
  { option: "🔑 Percaya diri adalah kunci pertama!" },
  { option: "🌈 Hari ini adalah kesempatan baru!" },
  { option: "🕊️ Langkah kecil lebih baik daripada diam!" },
  { option: "⚡ Tetap semangat meski terasa berat!" },
  { option: "🏆 Kesuksesan dimulai dari keberanian mencoba!" },
  { option: "🧘 Fokus, sabar, konsisten, pasti berhasil!" },
  { option: "🌻 Jangan takut gagal, takutlah berhenti!" },
  { option: "🌞 Senyum hari ini, semangat akan mengikuti!" },
  { option: "🌱 Proses kecil hari ini menumbuhkan hasil besar esok!" },
  { option: "✨ Setiap detik adalah peluang baru!" },
  { option: "🎯 Fokus pada tujuan, bukan hambatan!" },
  { option: "💡 Ide kecil bisa jadi cahaya besar!" },
  { option: "🍀 Jangan takut mencoba hal baru, keberuntungan menunggu!" },
  { option: "🏔️ Setiap langkah membawamu lebih dekat ke puncak!" },
  { option: "🦋 Perubahan kecil bisa membawa hidup yang indah!" },
  { option: "🎶 Jalani hari dengan irama positif!" },
  { option: "🚴 Terus bergerak, jangan berhenti di tengah jalan!" },
]

export default function App() {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
    setShowConfetti(false)

    // mainkan suara spin
    const spinSound = new Audio("/spin.mp3")
    spinSound.play()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 sm:p-6 relative overflow-hidden">
      {showConfetti && <Confetti />}

      {/* Judul */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 text-white drop-shadow-lg animate-bounce text-center">
        🎡 Roulette Kata Semangat Hari Ini 🎉
      </h1>

      {/* Roulette */}
      <div className="bg-white/20 backdrop-blur-lg p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/30 w-[90vw] max-w-md sm:max-w-lg">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data.map(() => ({ option: "✨ ??? ✨" }))}
          backgroundColors={["#6366f1", "#8b5cf6", "#10b981", "#f59e0b"]}
          textColors={["#ffffff"]}
          outerBorderColor={["#ffffff"]}
          radiusLineColor={["#ffffff"]}
          fontSize={12}
          onStopSpinning={() => {
            setMustSpin(false)
            setShowConfetti(true)
            setIsModalOpen(true)
          }}
        />
      </div>

      {/* Tombol spin */}
      <button
        onClick={handleSpinClick}
        disabled={mustSpin}
        className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition disabled:opacity-50 text-sm sm:text-base lg:text-lg"
      >
        👉 Tekan Aku untuk Memutar Roulette 🎡
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white rounded-3xl shadow-2xl w-[90%] sm:w-[80%] lg:max-w-4xl p-6 sm:p-8 lg:p-12 animate-fadeIn">
            {/* Tombol X */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={28} />
            </button>

            <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
              🎉 Kata Semangatmu Hari Ini 🎉
            </h2>

            <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-center text-gray-700 leading-relaxed">
              {data[prizeNumber].option}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
