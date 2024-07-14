import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";
import env from "react-dotenv";

const NewsCard = ({ title, description, urlToImage, url }) => (
  <Card sx={{ maxWidth: 345, margin: 2 }}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        component="a"
        href={url}
        target="_blank"
      >
        Read more
      </Typography>
    </CardContent>
  </Card>
);

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("https://newsdata.io/api/1/news", {
          params: {
            apikey: env.NEWS_API_KEY,
            q: "finance",
            language: "en",
          },
        });
        setArticles(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the news articles", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Latest News
      </Typography>
      <Grid container justifyContent="center">
        {articles.slice(0, 2).map((article, index) => (
          <Grid item key={index}>
            <NewsCard
              title={article.title}
              description={article.description}
              urlToImage={article.urlToImage}
              url={article.url}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsSection;
