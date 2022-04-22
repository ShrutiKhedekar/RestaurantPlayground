import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CardBox = ({ info }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    const newPath = `/cardDetails/${info._id}`;
    navigate(newPath);
  };

  return (
    <div className="">
      {/* {info && <CardBox info={info} />} */}
      {info && (
        <Card sx={{ minWidth: 275, maxWidth: 375 }} onClick={navigateTo}>
          <CardContent>
            <Typography variant="h6" component="div">
              {info.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {info.borough}
            </Typography>
            <Typography variant="body5">{info.cuisine}</Typography>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CardBox;
