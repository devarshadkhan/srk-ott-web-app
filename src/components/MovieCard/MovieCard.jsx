import React from "react";
import Slider from "react-slick";
import "./MovieCard.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";
import { formatDateToMonthNameDayYear, formatDateToSepDateYear } from "../../utils/hooks";
const MovieCard = ({
  trending,
  name,
  select,
  onSelectChange,
  data1,
  data2,
  day
}) => {
  // console.log("PROPS", select);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: false,
  };
  return (
    <>
      <div>
        <section className="movieCard">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="selectT">
                  <h4>{name}</h4>
                  {select ? (
                    <>
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        value={select}
                        onChange={(e) => onSelectChange(e.target.value)}
                      >
                        {/* <option selected>Open this select menu</option> */}
                        <option value={data1}>{data1}</option>
                        <option value={data2}>{data2}</option>
                      </select>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <Slider {...settings}>
                {trending?.map((e) => {
                  console.log("+==================",e.media_type);
                  return (
                    <>
                      <Link
                      
                      to={`/${e?.media_type || select}/${e?.id}`}
                      // to={e?.media_type ? `/${e?.media_type}/${e?.id}` : "#"} 
                        key={e?.id}
                        className=""
                      >
                        <span>
                          <img
                            src={`https://image.tmdb.org/t/p/w500${e?.poster_path}`}
                            className="cardImg"
                          />
                        </span>

                        <div className="mainRD">
                          <div>
                          {/* {select === data2 ? <> <p>
                              {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.release_date}</span></>:<> <p>
                              {`${e?.original_name?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.first_air_date}</span></>} */}



                            {/* <p>
                              {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                              </p> */}
                              <p>
  {e?.title || e?.name ? (
    `${(e?.title || e?.name)?.substring(0, 10)}...`
  ) : (
    'Title Not Available'
  )}
</p>

                            <p> <span>{formatDateToMonthNameDayYear(e.release_date || e?.first_air_date)}</span> </p>















{/* 
                            {select === data2 ? (
  <>
    <p>
      {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
    </p>
    <span>{e.release_date}</span>
  </>
) : (
  <>
    <p>
      {`${e?.original_name?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
    </p>
    <span>{e.first_air_date}</span>
  </>
)}

{day ? <>{day === "day" ? (
  <>
    <p>
      {`${e?.original_title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
    </p>
    <span>{e.release_date}</span>
  </>
) : (
  <>
    <p>
      {`${e?.original_title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
    </p>
    <span>{e.release_date}</span>
  </>
)}</>:""} */}







                          
                            {/* {select === data2 ? (
  <>
    <p>
      {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
    </p>
    <span>{e.release_date}</span>
  </>
) : (
  <>
    {select === data1 ? (
      <>
        <p>
          {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
        </p>
        <span>{e.release_date}</span>
      </>
    ) : (
      <>
        {day === "day" ? (
          <>
            <p>
              {`${e?.original_title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
            </p>
            <span>{e.release_date}</span>
          </>
        ) : (
          <>
            <p>
              {`${e?.original_title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
            </p>
            <span>{e.release_date}</span>
          </>
        )}
      </>
    )}
  </>
)} */}

                            {/* {select === data2 ? (
  <>
    <p>
      {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
    </p>
    <span>{e.release_date}</span>
  </>
) : (
  <>
    <p>
      {`${e?.original_name?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
    </p>
    <span>{e.first_air_date}</span>
  </>
)} */}
                            {/* {select === data2 ? <> <p>
                              {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.release_date}</span></>:<> <p>
                              {`${e?.original_name?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.first_air_date}</span></>}
                          {select === data1 ? <> <p>
                              {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.release_date}</span></>:<> <p>
                              {`${e?.original_name?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.first_air_date}</span></>} */}

                            {/*                         
                            {select ? (
                          select === data2 ? (
                            <>
                              <p>
                                {`${e?.title?.substring(0, 10)}...` ||
                                  `${e?.name?.substring(0, 10)}...`}
                              </p>
                              <span>{e.release_date}</span>
                            </>
                          ) : (
                            <>
                              <p>
                                {`${e?.original_name?.substring(0, 10)}...` ||
                                  `${e?.name?.substring(0, 10)}...`}
                              </p>
                              <span>{e.first_air_date}</span>
                            </>
                          )
                        ) : (
                          <>
                          <p>
                                {`${e?.original_title?.substring(0, 10)}...` ||
                                  `${e?.name?.substring(0, 10)}...`}
                              </p>
                              <span>{e.first_air_date}</span>
                          </>
                        )} */}

                            {/* {
                            select ? <>
                            {select === "movie" ? <> <p>
                              {`${e?.title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.release_date}</span></>:<> <p>
                              {`${e?.original_name?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.first_air_date}</span></>}
                          
                            </>:<>
                            {select === "day" ? <> <p>
                              {`${e?.original_title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.release_date}</span></>:<> <p>
                              {`${e?.original_title?.substring(0, 10)}...` || `${e?.name?.substring(0, 10)}...`}
                            </p> <span>{e.release_date}</span></>}
                            </>
                           } */}
                          </div>

                          <div className="circleRating">
                            <CircularProgressbar
                              value={e.vote_average.toFixed(2)}
                              maxValue={10}
                              text={e.vote_average.toFixed(1)}
                              styles={buildStyles({
                                pathColor:
                                  e.vote_average < 5
                                    ? "red"
                                    : e.vote_average < 7
                                    ? "orange"
                                    : "green",
                              })}
                            />
                          </div>
                        </div>
                      </Link>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MovieCard;
