import React, {Component} from 'react'
import Layout from '../components/layout/Layout'
import fetch from 'isomorphic-unfetch'
import IndexDesktop from '../components/pages/index/Desktop/IndexDesktop';
import IndexMobile from '../components/pages/index/Mobile/IndexMobile';

export default class Page extends Component {
    static async getInitialProps(ctx) {
        try {
            const rawGeoData = await fetch('https://www.lacountycovid19api.com/geo/neighborhoods');
            const rawHistoricalData = await fetch('https://www.lacountycovid19api.com/meta/historical');
            const rawNeighborhoodData = await fetch('https://www.lacountycovid19api.com/neighborhoods/');
            const rawMetaData = await fetch('https://www.lacountycovid19api.com/meta/');
            const geoData = await rawGeoData.json();
            const historicalData = await rawHistoricalData.json(); 
            const neighborhoodData = await rawNeighborhoodData.json();
            const metaData = await rawMetaData.json();
            
            return({
                geoData,
                historicalData,
                neighborhoodData,
                metaData
            })
        } catch (err) {
            console.log(err)
        }
    };
    
    state = {
        width: 899
    }

    componentDidMount() {

        this.setState({width: window.innerWidth});

        window.addEventListener('resize', ()=>{
            this.setState({width: window.innerWidth})
        })
    }

    componentWillUnmount() {
        window.removeEventListener('resize', ()=>{
            
        });
    }

    
    render(){
        const { width } = this.state;
        const {
            metaData,
            neighborhoodData,
            geoData,
            historicalData
        } = this.props
        const allData = {
            metaData,
            neighborhoodData,
            geoData,
            historicalData
        };

        if (width > 1024) {
            return (
                <Layout>
                    <IndexDesktop data={allData}/>
                </Layout>
            )
        } else {
            return (
                <Layout>
                    <IndexMobile data={allData}/>
                </Layout>
            )
        }
        
    };
}

