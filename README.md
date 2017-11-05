# Gift the Code


# Charity: The 519 


The main pain point identified by this challenge is that there is no single solution to draw insights from their data. The ideal solution is an interactive user interface which integrates with Excel to provide quality assurance and data visualization features. The 519’s data is divided between member (donor) and event/program data. Potentially, the member data can be used to increase donations through year end personalized reports which shows donors the impact they made. Furthermore, the event data can be leveraged to improve events based on attendance and registration numbers. 


We came up with a two part solution that leverages pre-existing resources to work with the platform we built this weekend. Open Refine is a free Java based tool which takes in Excel documents and provide drag and click features to detect and handle abnormalities in the data. Using Open Refine, The 519 team can easily format, sort and clean their data. After the data is cleaned, they can load it onto our web platform to get a visualization. 


Our web platform generates graphs and metrics at the member and event/program granularity. The platform provides a search feature, which users can use to look up member profiles based on their unique IDs. Additionally, the search also brings up a graph that visualizes the member’s participation activity within the last twelve months. The graph simultaneously tracks member registration and attendance and overlays it against a benchmark measure of total attendance. Users can also search for events/programs using their Event ID, which brings up a graph which visualizes how many members registered and attended the event within the last twelve months.   


Further implementations can include search features based on changes in member/event activity as well as better integration between Open Refine and our platform (possibly through an API call). 

