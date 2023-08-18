import Accordion from "../components/Accordion"

function Accordian() {
    const items = [
        {   
            id: 'gtgti',
            label: 'Lab 1',
            content: 'C1 wjbfwuebfwibwicnwjencwen niub fiubfeibferifn bwibfeiubferiubiu beiubfiwebfib ibeifb'
        },
        {
            id: 'gtih',
            label: 'Lab 2',
            content: 'C2 wjbfwuebfwibwicnwjencwen niub fiubfeibferifn bwibfeiubferiubiu beiubfiwebfib ibeifb'
        },
        {
            id: 'ojofj',
            label: 'Lab 3',
            content: 'C3 wjbfwuebfwibwicnwjencwen niub fiubfeibferifn bwibfeiubferiubiu beiubfiwebfib ibeifb'
        },
    ]

    return (
        <Accordion items={items}/>
    )
}

export default Accordian