<template>
  <div class="fenlei">
    <div class="header">
      <p class="hh">分类 <van-icon name="search" /></p>
    </div>
<van-sidebar v-model="activeKey" class="left"  @click="bgChange">
  <van-sidebar-item v-for="item in list" :key="item._id" :title="item.name"  @click="fenleiList2(item.name)"  />
</van-sidebar>
<div class="right">
  <img src="./img/分类1.png" alt="">
  <div class="top" >
    <p>精选分类</p>
    <div class="tt" >
    <div class="tc" v-for="data in list2.slice(0,6)" :key="data._id" @click="fenleiList2(data.name)"> <img :src="data.coverImg" alt="">
    <p>{{data.name}}</p>
    </div>
   
  </div>
  </div>
  <div class="top">
    <p>精选专区</p>
    <div class="tt" >
    <div class="tc" v-for="data in list2.slice(0,6)" :key="data._id" @click="fenleiList2(data.name)"> <img :src="data.coverImg" alt="">
    <p>{{data.name}}</p>
    </div>
   
  </div>
  </div>
</div>
  </div>
</template>

<script>
import{ reqProduct_categories,reqProduct_catelist } from "../../api/product";
export default {
 
  data() {
  
    return {
        activeKey: 0,
       list:[],
        list2:[]
    };
  },
  computed: {},
  watch: {},

  methods: {
     async fenleiList(){
           const result=await reqProduct_categories();
           this.list=result.categories
          //  console.log(result);
          //  console.log(this.list);
       } ,
       async fenleiList2(name){
        //  console.log(1111,name);
           const result=await reqProduct_catelist(name);
           console.log(result);
           this.list2=result.products;
       },
         godetail(id){
            this.$router.push('/detail/'+id);
        },
        bgChange(){
        //  document.getElementsByClassName("left").style=
        }
  },
  created() {
    this.fenleiList();
  
  },
  mounted() {},
  components: {},
};
</script>
<style scoped>
.header{
  width: 100%;
  height: 100px;
  line-height: 100px;
  font-size: 18px;
}
.hh{
  text-align: center;
  height: 100px;
  margin-top: -30px;
    
}
.left{
  float: left;
  color: #929ea3;
}
.right{
  width: 270px;
  float: right;
  color: #929ea3;
}

.right img{
  width: 260px;
  height: 100px;
  border-radius: 10px;
}
.right .top{
  width: 270px;
  height: 200px;

}
.right .top p{
  width: 270px;
  height: 30px;
  line-height: 30px;
}
.tt{
  width: 270px;
  height: 150px;
  margin-top: -26px
}
.top img{
  margin-top: 20px;
  width: 80px;
  height: 80px;
  float: left;
}
.tc{
  width: 70px;
  height: 70px;
  float: left;
  margin: 5px 9px;
}
.tc img{
  width: 50px;
  height: 50px;
}
.tc p{
  
  height: 12px;
  font-size: 12px;
  clear: both;
 max-width: 60px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}


</style>
