import {ResponsiveContainer, PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {VaccinByGenderDetails} = props
  return (
    <div className="dash-background-2">
      <p className="v-g-head">Vaccination by Gender</p>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="50%"
            cy="50%"
            data={VaccinByGenderDetails}
            startAngle={0}
            endAngle={360}
            innerRadius="40%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#5a8dee" />
            <Cell name="Others" fill="#2cc6c6" />
          </Pie>
          <Legend iconType="circle" layout="vertical" align="right" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationByGender
