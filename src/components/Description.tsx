import LayoutContainer from "./shared/LayoutContainer"

const Description = () => {
  return (
    <section className=" mb-10 md:mb-15">
        <LayoutContainer>
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl text-center font-semibold text-slate-600">
                    What is VoiceAI?
                </h2>
                <div className="border w-80 mx-auto mt-2 border-gray-100"></div>
                <p className=" max-w-4xl mx-auto text-center text-slate-500 text-lg px-3 md:px-0"> VoiceAI is an advanced voice-based application that enables business to automate cuce customer conversations , handle
                    support queries, book appoinments, and handle improve user management.
                </p>
            </div>
            <div className="border w-full mt-7 border-gray-200 relative ">
                <div className="w-2 h-2 bg-indigo-400 rounded-full absolute -top-1 left-38  md:left-90 lg:left-130"></div>
            </div>
        </LayoutContainer>
    </section>
  )
}
 
export default Description