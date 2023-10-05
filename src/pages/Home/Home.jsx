import React, { useEffect, useState } from "react";
import "./Home.css";
import HeroBanner from "./HeroBanner/HeroBanner";
import MovieCard from "../../components/MovieCard/MovieCard";
import CircleRating from "../../components/circlerating/CircleRating";
import axiosInstance from "../../utils/axios";
import { API } from "../../utils/apiEndpoint";
const Home = () => {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [toprated, setToprated] = useState([]);
  const [upComingmovie, setupComing] = useState([]);
  const [select, setSelect] = useState("movie");
  const [dayWeek, setDayWeek] = useState("day");
  const [pmt, setPmt] = useState("movie");
  const trendingMovie = async () => {
    await axiosInstance.get(`/trending/movie/day`).then((res) => {
      setTrending(res.data.results);
    });
  };
  const trendingMovie1 = async () => {
    await axiosInstance.get(`/trending/movie/week`).then((res) => {
      setTrending(res.data.results);
    });
  };
  const popularMovie = async () => {
    await axiosInstance.get("movie/popular").then((res) => {
      setPopular(res.data.results);
    });
  };
  const popularMovie1 = async () => {
    await axiosInstance.get("tv/popular").then((res) => {
      setPopular(res.data.results);
    });
  };
  const topRatedMovie = async () => {
    await axiosInstance.get(`movie/top_rated`).then((res) => {
      setToprated(res.data.results);
    });
  };
  const topRatedTVShow = async () => {
    await axiosInstance.get(`tv/top_rated`).then((res) => {
      setToprated(res.data.results);
    });
  };
  const upComing = async () => {
    await axiosInstance.get(`${API.upComing}`).then((res) => {
      setupComing(res.data.results);
    });
  };
  useEffect(() => {
    // trendingMovie();
    // popularMovie();
    upComing();
  }, []);

  useEffect(() => {
    if (select === "movie") {
      topRatedMovie();
    } else {
      topRatedTVShow();
    }
    if (dayWeek === "day") {
      trendingMovie();
    } else {
      trendingMovie1();
    }
    if (pmt === "movie") {
      popularMovie();
    } else {
      popularMovie1();
    }
  }, [select, dayWeek, pmt]);
  const onSelectChange = (value) => {
    setSelect(value);
  };
  const onSelectChange1 = (value) => {
    setDayWeek(value);
  };
  const onSelectChange2 = (value) => {
    setPmt(value);
  };
  return (
    <>
      <HeroBanner />
      {/* <MovieCard /> */}
      {/* {trending.map((trendingItem)=>{
        return(
          <> */}
      <MovieCard
        name="Top Rated"
        data1="tv"
        data2="movie"
        trending={toprated}
        onSelectChange={onSelectChange}
        select={select}
      />
      <MovieCard
        name="Trending"
        data1="day"
        data2="week"
        day={"day"}
        select={dayWeek}
        trending={trending}
        onSelectChange={onSelectChange1}
      />
      {/* </>
        )
      })} */}
      <MovieCard
        name="Recommended for you"
        data1="tv"
        data2="movie"
        onSelectChange={onSelectChange2}
        select={pmt}
        trending={popular}
      />
      <MovieCard name="Upcoming" trending={upComingmovie} />
    </>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import "./Home.css";
// import HeroBanner from "./HeroBanner/HeroBanner";
// import MovieCard from "../../components/MovieCard/MovieCard";
// import axiosInstance from "../../utils/axios";
// import { API } from "../../utils/apiEndpoint";

// const Home = () => {
//   // Define states to manage data and user selections
//   const [trending, setTrending] = useState([]);
//   const [popular, setPopular] = useState([]);
//   const [toprated, setToprated] = useState([]);
//   const [upComingmovie, setUpcoming] = useState([]);
//   const [select, setSelect] = useState("movie");
//   const [dayWeek, setDayWeek] = useState("day");
//   const [pmt, setPmt] = useState("movie");

//   // Function to fetch trending movies by day
//   const trendingMoviesByDay = async () => {
//     const response = await axiosInstance.get(`${API.allMovie}/day`);
//     setTrending(response.data.results);
//   };

//   // Function to fetch trending movies by week
//   const trendingMoviesByWeek = async () => {
//     const response = await axiosInstance.get(`${API.allMovie}/week`);
//     setTrending(response.data.results);
//   };

//   // Function to fetch popular movies
//   const fetchPopularMovies = async () => {
//     const response = await axiosInstance.get("movie/popular");
//     setPopular(response.data.results);
//   };

//   // Function to fetch popular TV shows
//   const fetchPopularTVShows = async () => {
//     const response = await axiosInstance.get("tv/popular");
//     setPopular(response.data.results);
//   };

//   // Function to fetch top-rated movies or TV shows based on user selection
//   const fetchTopRated = async () => {
//     if (select === "movie") {
//       const response = await axiosInstance.get("movie/top_rated");
//       setToprated(response.data.results);
//     } else {
//       const response = await axiosInstance.get("tv/top_rated");
//       setToprated(response.data.results);
//     }
//   };

//   // Function to fetch upcoming movies
//   const fetchUpcomingMovies = async () => {
//     const response = await axiosInstance.get(API.upComing);
//     setUpcoming(response.data.results);
//   };

//   useEffect(() => {
//     // Fetch popular movies and upcoming movies when the component mounts
//     fetchPopularMovies();
//     fetchUpcomingMovies();
//   }, []);

//   useEffect(() => {
//     // Fetch top-rated movies or TV shows based on user selection
//     fetchTopRated();

//     // Fetch trending movies by day or week based on user selection
//     if (dayWeek === "day") {
//       trendingMoviesByDay();
//     } else {
//       trendingMoviesByWeek();
//     }

//     // Fetch popular movies or TV shows based on user selection
//     if (pmt === "movie") {
//       fetchPopularMovies();
//     } else {
//       fetchPopularTVShows();
//     }
//   }, [select, dayWeek, pmt]);

//   // Handle user selection changes for "select"
//   const onSelectChange = (value) => {
//     setSelect(value);
//   };

//   // Handle user selection changes for "dayWeek"
//   const onSelectChangeDayWeek = (value) => {
//     setDayWeek(value);
//   };

//   // Handle user selection changes for "pmt"
//   const onSelectChangePMT = (value) => {
//     setPmt(value);
//   };

//   return (
//     <>
//       <HeroBanner />
//       <MovieCard
//         name="Top Rated"
//         data1="Tv show"
//         data2="movie"
//         trending={toprated}
//         onSelectChange={onSelectChange}
//         select={select}
//       />
//       <MovieCard
//         name="Trending"
//         data1="day"
//         data2="week"
//         day={"day"} // You can set "day" as a constant if needed
//         select={dayWeek}
//         trending={trending}
//         onSelectChange={onSelectChangeDayWeek}
//       />
//       <MovieCard
//         name="Recommended for you"
//         data1="Tv show"
//         data2="movie"
//         onSelectChange={onSelectChangePMT}
//         select={pmt}
//         trending={popular}
//       />
//       <MovieCard name="Upcoming" trending={upComingmovie} />
//     </>
//   );
// };

// export default Home;
