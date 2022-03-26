<template>
  <button @click="go"> дальше </button>
  <div class="hello">

    <div class="one">
      <div class="teams">
        <div class="team">{{ team[0].name }} <strong> счет {{ team[0].count }}</strong></div>
        <div class="team">{{ team[1].name }} <strong> счет {{ team[1].count }}</strong></div>
      </div>
      <div class="teams">
        <div class="team">{{ team[2].name }} <strong> счет {{ team[2].count }}</strong></div>
        <div class="team">{{ team[3].name }} <strong> счет {{ team[3].count }}</strong></div>
      </div>
      <div class="teams">
        <div class="team">{{ team[4].name }} <strong> счет {{ team[4].count }}</strong></div>
        <div class="team">{{ team[5].name }} <strong> счет {{ team[5].count }}</strong></div>
      </div>
      <div class="teams">
        <div class="team">{{ team[6].name }} <strong> счет {{ team[6].count }}</strong></div>
        <div class="team">{{ team[7].name }} <strong> счет {{ team[7].count }}</strong></div>
      </div>
    </div>

      <div v-if="light" class="two">
        <div class="teams2">
          <div class="team">{{ team2[0].name }} <strong> счет {{ team2[0].count }}</strong></div>
          <div class="team">{{ team2[1].name }} <strong> счет {{ team2[1].count }}</strong></div>
        </div>
        <div class="teams2">
          <div class="team">{{ team2[2].name }} <strong> счет {{ team2[2].count }}</strong></div>
          <div class="team">{{ team2[3].name }} <strong> счет {{ team2[3].count }}</strong></div>
        </div>
      </div>

      <div v-if="light2" class="three">
        <div class="teams3">
          <div class="team">{{ team3[0].name }} <strong> счет {{ team3[0].count }}</strong></div>
          <div class="team">{{ team3[1].name }} <strong> счет {{ team3[1].count }}</strong></div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      light: false,
      light2: false,
      count: 0,
      team: [
        {name: 'команда 1', count: 0},
        {name: 'команда 2', count: 0},
        {name: 'команда 3', count: 0},
        {name: 'команда 4', count: 0},
        {name: 'команда 5', count: 0},
        {name: 'команда 6', count: 0},
        {name: 'команда 7', count: 0},
        {name: 'команда 8', count: 0},
      ],
      team2: [

      ],
      team3: [

      ],
    }
  },
  methods: {
    go(){
      
          for(let i=0; i<this.team.length; i++){
            this.team[i].count = Math.floor(Math.random() * (5 - 0)) + 0;
          }

          for(let i=0; i<this.team.length - 1; i++){
            if(this.team[i].count < this.team[i + 1].count){
              this.team2.push(this.team[i + 1])
            }else if(this.team[i].count > this.team[i + 1].count){
              this.team2.push(this.team[i])
            }else if(this.team[i].count == this.team[i + 1].count){
              this.team[i].count++
              this.team2.push(this.team[i])
            }
            i++
          }

          for(let i=0; i<this.team2.length; i++){
            this.team2[i].count = 0
          }

          this.light = true
        

        for(let i=0; i<this.team2.length; i++){
        this.team2[i].count = Math.floor(Math.random() * (5 - 0)) + 0;
        }

        for(let i=0; i<this.team2.length - 1; i++){

          if(this.team2[i].count < this.team2[i + 1].count){
            this.team3.push(this.team2[i + 1])
          }else if(this.team2[i].count > this.team2[i + 1].count){
            this.team3.push(this.team2[i])
          }else if(this.team2[i].count == this.team2[i + 1].count){
            this.team2[i].count++
            this.team3.push(this.team2[i])
          }
          i++
        }
        console.log(this.team2)
        console.log(this.team3)
        this.light2 = true

          for( let i=0; i<this.team3.length; i++){
            this.team3[i].count = Math.floor(Math.random() * (5 - 0)) + 0;
          }
          if(this.team3[0].count == this.team3[1].count){
            this.team3[0].count++
          }
          
      }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    height: 100vh;
    display: flex;
    justify-content: flex-start;
  }

  .one{
    width: 300px;
  }

  .two{
    width: 300px;
    margin-top: 100px;
  }

  .three{
    width: 300px;
    margin-top: 100px;
  }


  .teams{
    margin-bottom: 100px;
    width: 200px;
  }

  .teams2{
    margin-bottom: 280px;
    width: 200px;
  }

  .teams3{
    margin-top: 190px;
    width: 200px;
  }

  .team{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: aliceblue;
    border: 3px solid black;
    border-radius: 5px;
    height: 35px;
  }

  

</style>
