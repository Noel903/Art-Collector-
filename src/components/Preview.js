import React, { useState } from 'react';

/**
 * We need to import fetchQueryResultsFromURL since we will sometimes have urls in info.prev and info.next
 * which are query urls.
 */
import { fetchQueryResultsFromURL } from '../api';



const Preview = (props) => {
  // const { setSearchResults, setFeaturedResult, setIsLoading} = props;
  let setSearchResults = setSearchResults.props;
  let setFeaturedResult = setFeaturedResult.props;
  let setIsLoading = setIsLoading.props;

 const searchResults = props.searchResults
  let info = props.info
  let records = props.records

  // const {info, records, setSearchResults, setFeaturedResult, setIsLoading} = 



  /**
   * Destructure setSearchResults, setFeaturedResult, and setIsLoading from props
   * and also destructure info and records from props.searchResults
   * 
   * You need info, records, setSearchResults, setFeaturedResult, and setIsLoading as available constants
   */


  /**
   * Don't touch this function, it's good to go.
   * 
   * It has to be defined inside the Preview component to have access to setIsLoading, setSearchResults, etc...
   */
  async function fetchPage(pageUrl) {
    setIsLoading(true);

    try {
      const results = await fetchQueryResultsFromURL(pageUrl);
      setSearchResults(results);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return <aside id="preview">
    <header className="pagination">
      {/* This button should be disabled if nothing is set in info.prev, and should call fetchPage with info.prev when clicked */}
      <button 
        disabled={info.prev ? false : true} //added somefucntion in {} because it cannot be empty in JSX
        className="previous"
        onClick={fetchPage(info.prev)}>Previous</button>
      {/* This button should be disabled if nothing is set in info.next, and should call fetchPage with info.next when clicked */}
      <button
        disabled={info.next ? false : true}
        className="next"
        onClick={fetchPage(info.next)}>Next</button>
    </header>
    <section className="results">
      
        {records.map((record,index) => {
          return (<div
              key = {index}
              className="object-preview"
              onClick={(event) =>{
                event.preventDefault();
                setFeaturedResult(true);
              }}>
                {record.primaryimageurl ? <img src={ record.primaryimageurl } alt={ record.description} /> : "" }
                {record.title ? <h3>{ record.title }</h3> : <h3>MISSING INFO</h3>}
              {/* if the record.primaryimageurl exists, show this: <img src={ record.primaryimageurl } alt={ record.description } />, otherwise show nothing  }
              {if the record.title exists, add this: <h3>{ record.title }</h3>, otherwise show this: <h3>MISSING INFO</h3>} */}
            </div>)  
        })}
    </section>
  </aside>
}

export default Preview;