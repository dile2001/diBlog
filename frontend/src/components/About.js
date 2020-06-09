import React from 'react';
const About = () => {
    return (
        <>
         {/* <MainFeaturedPost post={mainFeaturedPost} /> */}
         <Grid container spacing={4}>
              {/* {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))} */}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              {/* <Main title="From the firehose" posts={posts} /> */}
              {/* <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              /> */}
            </Grid>
        </>
    )
}