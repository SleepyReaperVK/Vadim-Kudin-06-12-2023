# My React WeatherApp  

A basic weather app utilizing the AccuWeather API and React Bootstrap UI.
To the Demo:[VadimKudin](https://sleepyreapervk.github.io/Vadim-Kudin-06-12-2023/)

## What's have been done
    ►NavBar with navigation to Main and Favorites pages,
        including social links and a dark/light theme.
    ►Main Page with Searchbar, Current Weather, and Next 5-Day Weather, 
        using Redux store to push chosen city to favorites and retrieve it
        without fetching additional data.
    ►Favorite Page to view all favorite cities, with options to select/delete them.
        On select, go back to the MainPage with the data of the chosen city.
    ►404 Page: If you try to access an invalid URL, you will be redirected to this page.
    ►Responsive design: Utilized React Bootstrap UI for responsiveness to different screen sizes.
### What's to Come
    ► Optimize searchBar by using only ValidChar and useRef/useMemo to prevent
        unnecessary re-renders.
    ► Review the searchBar filter function, currently non-functional.
    ► Add a Fahrenheit to Celsius button.
    ► Use a Geolocation API to display the current city weather of the user.
    ► Change the icons to SVGs, possibly with some basic animations.
    ► Change the design and add a skeleton to populate the page a bit.
    ► Needed a better errorhandle of fail to fetch.
    ►Switch the SearchBar for a Typeahead

    ### ChangeLog
    08/12/2023 - New API key added some responsivenec of small screens
