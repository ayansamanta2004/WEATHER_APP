import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
    const INIT_URL = "https://media.istockphoto.com/id/1163968623/photo/commuters-cars-drive-through-fog-on-city-street-at-twilight.jpg?s=612x612&w=0&k=20&c=U_7_S6Mu36z6G956zL0frPj3DYq8_UCKwJd4JbKdvOU="

    const HOT_URL = "https://www.shutterstock.com/image-photo/impact-climate-change-india-people-260nw-2357709757.jpg";
    const COLD_URL = "https://i.ndtvimg.com/i/2016-01/delhi-winter-afp_650x400_41453440510.jpg?downsize=545:307";
    const RAIN_URL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdSGDfRfEWKJMxHu-W7Qy41aCCHd8FwOH39A&s";

    return (
        <div className="InfoBox">
            {/* <h1>WeatherInfo - {info.weather}</h1> */}
            <div className="cardContainer">

                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} &nbsp;
                            {
                                info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <SunnyIcon /> : <AcUnitIcon />
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Minimun Temperature = {info.tempMin}&deg;C</p>
                            <p>Maximun Temperature = {info.tempMax}&deg;C</p>
                            <p>The Weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C</p>
                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}