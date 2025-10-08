export default function WatchSpinner() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="relative w-16 h-16 border-4 border-stone-900 rounded-full">
        {/* Watch hand */}
        <div className="absolute top-1/2 left-1/2 w-1 h-6 bg-amber-50 origin-bottom animate-spin"></div>
      </div>
    </div>
  );
}
