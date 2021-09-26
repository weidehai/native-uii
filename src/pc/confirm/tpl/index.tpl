<div comfirm>
  <div class="box">
    <div class="title"><%= data.title %></div>
    <div class="content"><%= data.content %></div>
    <div class="footer">
      <button cancel>取消</button>
      <button sure>确认</button>
    </div>
  </div>
  <style>
    div[comfirm]{
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      justify-content:center;
      align-items: center;
      background-color:rgba(160, 154, 154, 0.356)
    }
    div[comfirm]>.box{
      width:450px;
      height:auto;
      background-color:orange;
      display:flex;
      flex-direction:column;
    }
    div[comfirm]>.box>.title{
      border-bottom: 1px solid yellow;
      padding: 10px 0;
      text-align: center;
    }
    div[comfirm]>.box>.content{
      flex: 1;
      padding: 10px 0;
      text-align: center;
    }
    div[comfirm]>.box>.footer{
      padding: 20px 0;
      text-align: center;
    }
    div[comfirm]>.box>.footer>button{
      outline: none;
      border:none;
      border-radius: 2px;
      font-size: 1rem;
      padding:5px 10px;
      transition: all 0.1s;
    }
    div[comfirm]>.box>.footer>button:active{
      background-color: rgb(231, 219, 219);
    }
  </style>
</div>


