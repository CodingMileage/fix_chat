"use client";

import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";

// Function to fetch articles
async function fetchArticles(term) {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${term}&pageSize=10&apiKey=${apiKey}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  const data = await res.json();
  return data.articles.slice(0, 10);
}

export default function News() {
  const [articles, setArticles] = useState([]);
  const [term, setTerm] = useState("AI");
  const [searchInput, setSearchInput] = useState("AI");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch articles based on the search term
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let collectedArticles = [];

      try {
        while (collectedArticles.length < 10) {
          const fetchedArticles = await fetchArticles(term);

          // Filter out articles with missing author or content
          const filteredArticles = fetchedArticles.filter(
            (article) => article.author && article.content
          );

          collectedArticles = [...collectedArticles, ...filteredArticles];

          // Break if no more articles to fetch to avoid infinite loop
          if (fetchedArticles.length < 10) break;
        }

        // Trim the list to exactly 10 articles if more were collected
        setArticles(collectedArticles.slice(0, 10));
        setError(null);
      } catch (err) {
        setError("Could not load articles.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [term]); // Refetch when `term` changes

  // Update search input state as user types
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Update term when search button is clicked
  const handleSearch = (e) => {
    e.preventDefault();
    setTerm(searchInput.trim());
  };

  console.log(articles.map((article) => article.author));

  return (
    <Box sx={{ padding: 4 }} className="h-screen">
      <Typography variant="h4" gutterBottom align="center" className="mt-24">
        AI News & Insights
      </Typography>

      {/* Search Input */}
      <Box
        display="flex"
        justifyContent="center"
        mb={4}
        component="form"
        onSubmit={handleSearch}
      >
        <TextField
          variant="standard"
          label="Search for AI News"
          value={searchInput}
          onChange={handleInputChange}
          sx={{ width: "300px", mr: 2 }}
          className="bg-white rounded p-2"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </Box>

      {/* Loading, Error and Articles */}
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  ":hover": {
                    boxShadow: 6,
                  },
                  overflow: "hidden",
                }}
              >
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.urlToImage}
                    alt={`Image for ${article.title}`}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {article.description}
                  </Typography>
                  <Button
                    variant="text"
                    color="primary"
                    component="a"
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
