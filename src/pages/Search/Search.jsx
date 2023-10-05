import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import axiosInstance from "../../utils/axios";
import { API } from "../../utils/apiEndpoint";
import "../../components/MovieCard/MovieCard.css";
import { Link, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import axios from "axios";
import { formatDateToMonthNameDayYear } from "../../utils/hooks";
const Search = () => {
  const { query } = useParams();
  const [searchData, setSearchData] = useState([]);
  const [hasMore, setHasMore] = useState(true); // Indicates if there are more items to load
  const [page, setPage] = useState(1);
  const search_Api = async () => {
    await axiosInstance
      .get(`${API.searchapi_result}?query=${query}&page=${page}`)
      .then((res) => {
        setSearchData((perv) => [...perv, ...res.data.results]);
        setPage(page + 1);
        if (page >= res.data.total_pages) {
          setHasMore(false);
        }
        // console.log(res.data.results);
      });
  };
  useEffect(() => {
    search_Api();
  }, []);
  return (
    <div>
      {/* <MovieCard trending={allMovie} /> */}
      <div>
        <section className="movieCard ">
          <div className="container">
            <h4>{`search results ${query}`}</h4>
            <InfiniteScroll
              dataLength={searchData.length}
              next={search_Api}
              hasMore={hasMore}
              className="infinite"
              loader={
                searchData.length > 0 ? (
                  <>
                    <div
                      class="spinner-border text-light text-center d-block"
                      role="status"
                    >
                      <span class="visually-hidden"></span>
                    </div>
                  </>
                ) : (
                  ""
                )
              }
            >
              <div className="row">
                {searchData.map((item) => {
                  return (
                    <>
                      <div className="col-12 col-md-2">
                        <Link to={`/${item.media_type}/${item.id}`}>
                          <img
                            src={
                              item.poster_path
                                ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                                : "https://movix-eta.vercel.app/assets/no-poster-af8294eb.png"
                            }
                          />
                          <div className="mainRD">
                            <div>
                              <p>
                                {item?.title || item?.name
                                  ? `${(item?.title || item?.name)?.substring(
                                      0,
                                      10
                                    )}...`
                                  : "Title Not Available"}
                              </p>

                              <p>
                                {" "}
                                <span>
                                  {formatDateToMonthNameDayYear(
                                    item.release_date || item?.first_air_date
                                  )}
                                </span>{" "}
                              </p>
                            </div>

                            <div className="circleRating">
                              <CircularProgressbar
                                value={item.vote_average?.toFixed(2) || "0"}
                                maxValue={10}
                                text={item.vote_average?.toFixed(1) || "0"}
                                styles={buildStyles({
                                  pathColor:
                                    item.vote_average < 5
                                      ? "red"
                                      : item.vote_average < 7
                                      ? "orange"
                                      : "green",
                                })}
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
            </InfiniteScroll>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Search;
