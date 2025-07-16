import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />
            <Card />
            <Card />
            <Button title="small rounded-full" styles="small rounded-full bg-blue-400" />
            <Button title="meduim rounded-sm" styles="medium rounded-sm bg-blue-700" />
            <Button title="large rounded-md" styles="large rounded-md bg-blue-600" />
        </div>
    )
}
export default Landing;