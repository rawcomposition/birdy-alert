<img width="1306" alt="Screen Shot 2022-03-20 at 5 24 49 PM" src="https://user-images.githubusercontent.com/740090/159186629-fe733c42-677f-4878-a5c6-99fb94cd2220.png">


## Welcome to BirdyAlert! 🦆

This is a little project I put together to make finding rare eBird reports within a large radius easier. The eBird app already does this but only up to 30 miles. BirdsEye also does this up to 50 miles, but you have to pay if you want a larger radius. With this app you can check off the birds you've seen either in the US or in the world, depending on whether you're trying to build or US or world list.

Try it out at [https://birdyalert.com](https://birdyalert.com)

## Setup localhost

1. Change `.env.example` to `.env` and add your API keys 
2. Make sure your google maps API key has Google Places enabled
3. Run `npm install`
4. Run `npm run dev` in terminal
5. Open [http://localhost:3000](http://localhost:3000) with your browser

## Roadmap

- [ ] Switch to Cloudinary for thumbnails
- [ ] Remove subspecies and hybrids (group reports based on scientific name)
- [ ] Add link from app to Github
- [ ] Cache eBird API response for several minutes (or do all processing on the client side and cache results client side)
- [ ] Convert to Typescript
- [ ] Create component tests with `react-testing-library`
- [ ] Get location from device
- [ ] Setup error boundaries
- [ ] Add time period picker to allow showing results between 1 and 30 days
- [ ] Show Google map of reports
- [ ] Play sound when new species found
- [ ] Show alert when new species found
- [ ] Use Gravatars and/or setup Google login
- [ ] Highlight birds that are close

If you would like to contribute to any of the features above, feel free to open a pull request.
