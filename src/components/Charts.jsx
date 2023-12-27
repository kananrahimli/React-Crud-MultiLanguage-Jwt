import { styled } from "styled-components";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ChartContainer=styled.div`
height:calc( 100vh - 55vh);
   
`
const Charts = () => {
    const {t}=useTranslation()
    const {monthlyApplications}=useSelector((store)=>store.job)
    
  return (
    <ChartContainer>
        <ResponsiveContainer width="100%" height='100%'>
        <BarChart
        //   width={500}
        //   height={300}
          data={monthlyApplications}
          margin={{
            // top: 20,
            // right: 30,
            // left: 20,
            // bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={('count')} stackId="a" fill="#8884d8" name={t('count')}/>
          
        </BarChart>
        </ResponsiveContainer>
        
    </ChartContainer>
  )
}

export default Charts