import React from 'react'

const EventCard = (props) => {
    return (
        <div key={props.eventId} className="w-96 rounded-md border-2 h-full relative m-4 flex flex-col justify-between">
            <div>
                <div className="flex justify-between m-2 relative">
                    <div className="mx-2 flex flex-col"><span>{props.eventName}</span>
                        <div className="text-sm flex flex-col">
                            <span className='my-2'><EventIcon style={{ width: "1.5rem", height: "1.5rem" }} /> {props.startTime}</span>
                            <span className='ml-7 mb-1'>Duration: {(((Date.parse(props.endTime)) - (Date.parse(props.startTime))) / (1000 * 60 * 60)).toFixed(0)} hr</span>
                        </div>
                    </div>
                    <div className="font-extrabold cursor-pointer text-2xl text-gray-500 mx-2" >
                        <ShareIcon style={{ color: "black", width: "1.35rem", height: "1.35rem" }} onClick={Sharer} />
                    </div>
                </div>

                <img src={props.imageURL} alt="" className='w-full h-48' />

                <div className="m-2 text-gray-500 cursor-pointer">
                    <ReadMoreReact
                        text={props.description}
                        readMoreText={"...read more "}
                    />
                </div>
            </div>
            <div className=" mt-5 mb-2 text-gray-500 mx-5 flex justify-between">
                <div className="my-auto">Participants : {props.attendee + add}</div>


                <Accordion heading="Panelists">
                    {props.attendeeModel.panelists.map((prom, num) => {
                        return (
                            <div key={num} className="py-1 px-2">{prom}</div>
                        )
                    })}
                </Accordion>

            </div>
            <Button eventClick={Booking} />
        </div>
    )
}

export default EventCard
