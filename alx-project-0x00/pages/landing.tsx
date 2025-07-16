import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
            <Button title="Book Now" styles="small rounded-full bg-blue-400" />
            <Button title="Book Now" styles="medium rounded-sm bg-blue-700" />
            <Button title="Book Now" styles="large rounded-md bg-blue-600" />
            <Button title="Book Now" styles="large rounded-lg bg-blue-300" />
        </div>
    )
}
export default Landing;