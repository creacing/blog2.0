<template>
  <div id="calender"></div>
</template>
<script setup>
import { onMounted } from 'vue'
import * as echarts from 'echarts';
import { useData } from "vitepress";
const { theme } = useData();
const data = theme.value.posts
const dataDic = {}
// dataDic:{
//   '2022-1-1': 1
// }
for (const item of data) {
  const date = item.frontMatter.date
  const year = date.split('-')[0]
  if (Number(year) === 2022) {
    if (!dataDic[date]) {
      dataDic[date] = 1
    } else {
      dataDic[date] += 1
    }
  }

}

// 基于准备好的dom，初始化echarts实例
const getData = (year) => {
  year = year || (new Date()).getFullYear();
  let date = +echarts.number.parseDate(year + '-01-01');
  let end = +echarts.number.parseDate(year + '-12-31');
  let dayTime = 3600 * 24 * 1000;
  let data = [];
  for (let time = date; time <= end; time += dayTime) {
    const formatDate = echarts.format.formatTime('yyyy-MM-dd', time)
    data.push([
      formatDate,
      dataDic[formatDate] || 0
    ]);
  }
  return data;
}

onMounted(() => {
  const myChart = echarts.init(document.getElementById('calender'));
  const option = {
    title: {
      top: 0,
      text: '文章日历',
      left: 'center',
      textStyle: {
        color: '#3C4858'
      }
    },
    tooltip: {
      padding: 10,
      backgroundColor: '#555',
      borderColor: '#777',
      borderWidth: 1,
      formatter: function (obj) {
        var value = obj.value;
        return '<div style="font-size: 14px;">' + value[0] + '：' + value[1] + '</div>';
      }
    },
    visualMap: {
      show: true,
      showLabel: true,
      categories: [0, 1, 2, 3, 4],
      calculable: true,
      inRange: {
        symbol: 'rect',
        color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127']
      },
      itemWidth: 12,
      itemHeight: 12,
      orient: 'horizontal',
      left: 'center',
      bottom: 0
    },
    calendar: [{
      range: (new Date()).getFullYear(),
      left: 'center',
      cellSize: [12, 12],
      splitLine: {
        show: false
      },
      itemStyle: {
        width: '1.88679%',
        height: '15px',
        color: '#EEEEEE',
        borderColor: '#FFF',
        borderWidth: 2
      },
      yearLabel: {
        show: false
      },
      monthLabel: {
        nameMap: 'cn',
        fontWeight: 'lighter',
        fontSize: 12
      },
      dayLabel: {
        nameMap: 'cn',
        show: true,
        fontWeight: 'lighter',
        nameMap: ['日', '一', '二', '三', '四', '五', '六',],
        fontSize: 12
      }
    }],
    series: [{
      type: 'heatmap',
      coordinateSystem: 'calendar',
      calendarIndex: 0,
      data: getData('2022')
    }]

  };

  myChart.setOption(option);
})

</script>
<style lang='scss' scoped>
.calendar {
}
</style>

