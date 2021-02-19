<script>
// for Vue 2.0
import myDatepicker from 'vue-datepicker'

export default {
  name: 'Datepicker',
  data () {
    return {
      // for Vue 2.0
      Time: {
        time: ''
      },
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD',
        placeholder: ' Saisir la Date ',
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD'
      },
      limit: [{
        type: 'week',
        available: [1, 2, 3, 4, 5, 6, 7]
      },
      {
        type: 'fromto'
      }]
    }
  },
  components: {
    'date-picker': myDatepicker
  }
}
</script>
<template>
<date-picker class="date" :date="Time" :option="option" :limit="limit"></date-picker>
</template>

<style>
.date {
    display: inline-block;
    padding: 6px;
    line-height: 22px;
    font-size: 16px;
    border: 2px solid #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    color: #5F5F5F;
}
</style>
