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
import { useState, useEffect, SetStateAction } from "react";

type Article = {
  author: string;
  content: string;
  description: string;
  title: string;
  url: string;
  urlToImage: string | null;
};

const fallbackImage = "/images/logo2.png";

// Function to fetch articles
async function fetchArticles(term: string, page = 1): Promise<Article[]> {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${term}&pageSize=10&page=${page}&apiKey=${apiKey}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }
  const data = await res.json();
  return data.articles;
}

export default function News() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [term, setTerm] = useState("AI");
  const [searchInput, setSearchInput] = useState("AI");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Fetch articles based on the search term and page
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedArticles = await fetchArticles(term, page);

        // Filter out articles with missing author or content
        const filteredArticles = fetchedArticles.filter(
          (article) => article.author && article.content
        );

        setArticles(filteredArticles.slice(0, 10));
        setError(null);
      } catch (err) {
        setError("Could not load articles.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [term, page]); // Refetch when `term` or `page` changes

  // Update search input state as user types
  const handleInputChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchInput(e.target.value);
  };

  // Update term and reset page when search button is clicked
  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setTerm(searchInput.trim());
    setPage(1); // Reset to page 1 on new search
  };

  // Navigate to the next page of articles
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Navigate to the previous page of articles
  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // articles.map((article) => console.log(article));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 4,
        display: "flex",
        flexDirection: "column",
      }}
      className="bg-gradient-to-b from-[#0e021a] to-[#1c0633"
    >
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
          label="Search for News"
          onChange={handleInputChange}
          sx={{ width: "300px", mr: 2 }}
          className="bg-white rounded p-2"
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </Box>

      {/* Loading, Error, and Articles */}
      <Box sx={{ flexGrow: 1 }}>
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
                <a href={article.url} target="_blank" rel="noopener noreferrer">
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
                        image={article.urlToImage || fallbackImage} // Fallback image in public folder
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
                      {/* <Button
                        variant="text"
                        color="primary"
                        component="a"
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read more
                      </Button> */}
                    </CardContent>
                  </Card>
                </a>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      {/* Pagination Controls */}
      {!loading && !error && articles.length > 0 && (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={4}
          className="mb-10"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Typography mx={2} variant="body1">
            Page {page}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleNextPage}>
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
}
