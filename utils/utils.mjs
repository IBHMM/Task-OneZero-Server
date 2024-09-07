import fs from 'fs'

export function getMenu() {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);
  }
  
export function formatDate(date) {
    return new Date(date).toISOString().split('T')[0];
}
  
export function calculateDiscount(item, date) {
    if (item.rate.isEnabled && item.rate.schedule.isActive) {
      const { from, to, weekdays } = item.rate.schedule;
  
      if (date >= from && date <= to) {
        const dayOfWeek = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(date));
        const weekdaySchedule = weekdays[dayOfWeek];
        
        if (weekdaySchedule && weekdaySchedule.isWorking) {
          if (item.rate.isFixed) {
            item.priceSell -= item.rate.amount;
          } else {
            item.priceSell -= (item.priceSell * item.rate.amount) / 100;
          }
        }
      }
    }
    return item;
}
  