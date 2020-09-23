<template>
  <article class="lg:mx-32 mx-auto">
    <div v-for="(item, index) in cvData" :key="index">
      <Card
        :company="item.company"
        :title="item.title"
        :period="countDates(item.dateStart, item.dateEnd)"
        :location="item.location"
        :description="item.description"
      />
    </div>
  </article>
</template>

<script>
import cvData from '@/config/cv.json'
import Card from '@/components/ExperienceCard'

export default {
  components: {
    Card
  },
  data () {
    return {
      cvData
    }
  },
  methods: {
    countDates (start, end) {
      const to = new Date(start)
      const from = (end === 'Present') ? new Date() : new Date(end)
      const difference = (from.getFullYear() * 12 + from.getMonth()) - (to.getFullYear() * 12 + to.getMonth())

      console.log(difference)

      return start + ' - ' + end
    }
  }
}
</script>
