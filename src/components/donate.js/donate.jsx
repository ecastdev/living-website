export default function Donate(){
    const DonateData = [
        {
            title:'Educational Sponsorsh ip',
            subt: 'Address the lack of learning and playing materials for the children by sponsoring educational resources, including books, stationery, and play equipment. Your support will contribute to a more enriching andconducive learning environment for the children.'
        },
        {
            title:'Operational Funding Support',
            subt: 'Help overcome the challenge of insufficient funds for running the organization by sponsoring operational costs. This support can cover expenses related to maintaining facilities, utilities, administrative needs, and other crucial aspects that keep the organization operational and effective.'
        },
        {
            title:'Kitchen and Cooking Supplies Sponsorship',
            subt: 'Alleviate the shortage of cooking materials by sponsoring kitchen supplies. This could include utensils, cookware, and ingredients, ensuring that the organization can provide nutritious meals to those it serves. Your sponsorship in this area directly impacts the overall well-being of the community.'
        },
        {
            title:'Teacher Training and Recruitment Sponsorship',
            subt: "Tackle the shortage of teachers by sponsoring teacher training programs and recruitment initiatives. Your support will enhance the organization's capacity to provide quality education and mentorship to the children, fostering their development and growth."
        }
    ]
    return(
        <div className="flex mt-52 items-center flex-col ">
            <ul className="grid place-content-center">
                <h1 className="text-5xl lg:text-7xl text-rose-800 lg:ml-10 uppercase font-bigfont text-center">
                    Opportunities for Sponsoship
                </h1>
                <p className=" text-center ml-14 w-3/4 lg:ml-16 mt-8">
                In the journey of our organization, challenges emerge as
                silent opportunities, beckoning you to lead your life in
                alignment with the profound wisdom of James 1:27.
                </p>

            </ul>
            <div className="grid gap-10 mt-5 place-content-center lg:w-3/4 lg:ml-16">
                {DonateData.map((doData) =>(
                    <ul className="bg-blue-600 rounded-lg lg:w-3/5  shadow-lg">
                            <h1 className="text-rose-950 text-3xl font-bigfont font-extrabold pt-9 text-center ">
                                {doData.title}
                            </h1>
                            <p className="pt-6  text-center">
                                {doData.subt}
                            </p>
                    </ul>
                   
                ))}

            </div>
          
        </div>
    )
}