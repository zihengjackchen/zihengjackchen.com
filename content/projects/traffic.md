+++
authors = ["Ziheng Chen"]
title = "Chicago Traffic Study"
date = "2022-11-27"
tags = [
    "python", "pandas", "machine-learning", "large-scale-data-processing",
    "matplotlib", "seaborn"
]
+++

![map](/images/projects/te360.png#center)

[Source (GitHub)](https://github.com/zihengjackchen/TE360/tree/main/Final%20Project)

[Results](https://github.com/zihengjackchen/TE360/blob/main/Final%20Project/Presentables/TE360%20Final%20Project%20Report.pdf)

#### Problem Statement
The traffic in Chicago is terrible, at least that's what I was told. Like many other metropolitans, there are countless cars on the already ancient and narrow roads, and pedestrians are everywhere, making the driving condition even worse. As a result, aggressive drivers are commonplace. However, For the weeks that I worked in the city, I could not find any evidence to support the previous statement. Specifically, when I went out to a restaurant for lunch on a workday, I did not notice the overflowing amount of cars on
the road, and I did not feel the need to stay vigilant of the passing cars for aggressive behavior. Could it be that the density of businesses has little effect on the quality of traffic?

Along with examining the location distribution of companies, the *goal of my project is to find out whether the density of businesses negatively affects traffic conditions*. My opinion was certainly biased since I did not experience Chicago's traffic prior to COVID, and the city currently is not operating at its maximum. Therefore, for this project, I used the dataset provided by the city of Chicago to determine how bad the traffic actually is over the last three years. More specifically, I determined the quality along two criteria: congestion and the number of crashes. In addition, using the same congestion data, I will examine the congestion throughout the day across the regions that lie between my home and the city.

The result of this project, besides satisfying personal interests, can also help other people plan their routes. Furthermore, it can be informational for newcomers to choose an office in the city that can be reached with relatively low traffic.

In this project, I will be using the following dataset from the Chicago Data Portal that
contains the listed fields respectively:
1. Chicago Traffic Tracker - Congestion Estimates by Regions
    - Congestion information in units of miles per hour of the latest measurement
    Note: “For congestion advisory and traffic maps, this value is compared to a 0-9,
    10-20, and 21 & over scale to display heavy, medium, and free flow conditions for
    the traffic segment. Although expressed in miles per hour, this value is more a
    reflection of the congestion level in the region than it is indicative of the average
    raw speed vehicles are traveling within the region.
    - Region information in terms of latitude and longitude.”
2. Chicago Traffic Tracker - Historical Congestion Estimates by Region - 2018-Current
    - Congestion information in units of miles per hour since 2018
    - Region information in terms of latitude and longitude
3. Traffic Crashes - Crashes
    - Crash location in terms of latitude and longitude
4. Business Licenses
    - Business location in terms of latitude and longitude


#### Contribution
- Conducted a comprehensive analysis of traffic conditions in Chicago over the last three years using datasets from the Chicago Data Portal
- Investigated the impact of business density on traffic quality, specifically focusing on congestion and the number of crashes as key criteria
- Utilized datasets such as "Chicago Traffic Tracker - Congestion Estimates by Regions" and "Traffic Crashes - Crashes" to assess congestion levels and crash occurrences
- Examined congestion patterns throughout the day in regions between home and the city, providing insights into peak traffic times
- Contributed to the understanding of traffic dynamics in Chicago, offering valuable information for route planning and assisting newcomers in selecting offices with lower traffic accessibility.
- Demonstrated proficiency in data analysis, leveraging datasets with latitude and longitude information, including "Chicago Traffic Tracker - Historical Congestion Estimates by Region - 2018-Current" and "Business Licenses"