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

  // Fetch articles based on the search term
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedArticles = await fetchArticles(term);

        // Filter out articles without content
        const filteredArticles = fetchedArticles.filter(
          (article) => article.content && article.content.trim() !== ""
        );

        setArticles(filteredArticles);
        setError(null);
      } catch (err) {
        setError("Could not load articles.");
        console.error(err);
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
          variant="outlined"
          label="Search for AI News"
          value={searchInput}
          onChange={handleInputChange}
          sx={{ width: "300px", mr: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </Box>

      {error ? (
        <Typography color="error" align="center">
          {error}
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                {article.urlToImage && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={article.urlToImage}
                    alt={article.title}
                  />
                )}
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {article.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="primary"
                    component="a"
                    href={article.url}
                    target="_blank"
                  >
                    Read more
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
