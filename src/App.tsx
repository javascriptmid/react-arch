export default function App() {
  return (
    <>
      <div className="h-16 bg-red-200" />
      <div className="py-4 px-2 max-w-5xl mx-auto space-y-2">
        <div className="flex flex-col md:flex-row space-x-2">
          <div className="w-8/12">
            <div style={{ height: 320 }} className="flex-1 bg-blue-200">
              Video
            </div>
          </div>
          <div className="w-4/12">
            <div style={{ height: 320 }} className="flex-1 bg-green-200">
              Video
            </div>
          </div>
        </div>
        <div className="w-full">
          <div style={{ height: 320 }} className="flex-1 bg-yellow-200">
            Comments
          </div>
        </div>
      </div>
    </>
  );
}
