export const articles = [
    {
        title: "Network Intrusion Detection System",
        date: "26 January 2021",
        preview: "The full article can be found on the IEEE website at https://ieeexplore.ieee.org/document/9359689",
        text: "The number and severity of cybernetic attacks continue to increase. Thereupon Intrusion Detection Systems (IDSs) have become an integral part of the organization's security infrastructure. Several algorithms have been applied in order to realize the detection of anomalies. They derived mainly from Artificial Intelligence (AI). The main interest is thus to reduce the false-negative and improve the quality of detection. However, it is important to reduce processing time. There are many data sets in literature which can be used for the learning and the test step of the IDS. One of the objectives of this work is to select the most significant characteristics of New Selected Learning-Knowledge Discovery in Databases Data set (NSL- KDD), which influences the result of the detection. Therefore, we will consume the disturbing element of the dataset. To realize our Network IDS (NIDS), we implemented the Condensed Nearest Neighbors (CNN) algorithm as our first approach. A very effective method for classification and regression as it considers the distribution of samples. CNN reduces the data vector dimension which leads in turn to low use of system resources as well as a reduction in processing time while maintaining good detection results. In a second approach, we adopted a Neural Network (NN) with a pre-classification of our learning data set. To prove the efficiency of our approaches, we release a comparison with K Nearest Neighbors (KNN) methods. We also compare our approaches with two other methods from WEKA software. Experiments show that our two proposed approaches of IDS improve the detection rate, decrease missed attacks while reducing processing time.",
    },
]


// functions 
export function getArticle(title) {
    return articles.find((article) => article.title === title);
}