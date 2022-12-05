<template>
  <div class="container" style="height: 100%">
    <!-- div for search menu -->
    <div class="search-view">
      <div class="search-office-select">
        <select class="select-button" name="" id="">
          <option value="alloffice">All Offices</option>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="medianv">Medianv</option>
        </select>
      </div>

      <div class="search-department-select">
        <select class="select-button" name="" id="">
          <option value="alloffice">All Departments</option>
          <option value="admin">Admin</option>
          <option value="csr">CSR</option>
          <option value="hr">HR</option>
          <option value="mnvabad">Medianv Ahmedabad</option>
          <option value="mnvhq">Medianv Headquarter</option>
          <option value="seo">SEO</option>
          <option value="sd">Software Developer</option>
          <option value="wd">Wordpress Developer</option>
        </select>
      </div>

      <div class="search-user">
        <div class="searchbar">
          <i class="fa-solid fa-magnifying-glass text-green"></i>
          <input class="search-item" type="text" />
        </div>
      </div>
    </div>
    <!-- second div for card view -->
    <!-- <div class="userview">
      <div class="user-flexview">
        <div class="div-img">
          <img
            src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/62c25f274decf9001be12655/QnELuh0CJ9Gf2w1CkBEe7.jfif"
          />
        </div>
        <div><h3>Vishnu Vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>+91 1234569870</p></div>
        <div><a href="#">vishnu@medianv</a></div>
        <hr />
        <div>
          <p><small>Line Manager XYZ</small></p>
        </div>
      </div>

      <div class="user-flexview">
        <div class="div-img">
          <img
            src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/62c25f274decf9001be12655/QnELuh0CJ9Gf2w1CkBEe7.jfif"
          />
        </div>
        <div><h3>Vishnu Vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>+91 1234569870</p></div>
        <div><a href="#">vishnu@medianv</a></div>
        <hr />
        <div>
          <p><small>Line Manager XYZ</small></p>
        </div>
      </div>

      <div class="user-flexview">
        <div class="div-img">
          <img
            src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/62c25f274decf9001be12655/QnELuh0CJ9Gf2w1CkBEe7.jfif"
          />
        </div>
        <div><h3>Vishnu Vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>+91 1234569870</p></div>
        <div><a href="#">vishnu@medianv</a></div>
        <hr />
        <div>
          <p><small>Line Manager XYZ</small></p>
        </div>
      </div>

      <div class="user-flexview">
        <div class="div-img">
          <img
            src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/62c25f274decf9001be12655/QnELuh0CJ9Gf2w1CkBEe7.jfif"
          />
        </div>
        <div><h3>Vishnu Vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>+91 1234569870</p></div>
        <div><a href="#">vishnu@medianv</a></div>
        <hr />
        <div>
          <p><small>Line Manager XYZ</small></p>
        </div>
      </div>

      <div class="user-flexview">
        <div class="div-img">
          <img
            src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/62c25f274decf9001be12655/QnELuh0CJ9Gf2w1CkBEe7.jfif"
          />
        </div>
        <div><h3>Vishnu Vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>+91 1234569870</p></div>
        <div><a href="#">vishnu@medianv</a></div>
        <hr />
        <div>
          <p><small>Line Manager XYZ</small></p>
        </div>
      </div>

      <div class="user-flexview">
        <div class="div-img">
          <img
            src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/62c25f274decf9001be12655/QnELuh0CJ9Gf2w1CkBEe7.jfif"
          />
        </div>
        <div><h3>Vishnu Vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>+91 1234569870</p></div>
        <div><a href="#">vishnu@medianv</a></div>
        <hr />
        <div>
          <p><small>Line Manager XYZ</small></p>
        </div>
      </div>

      <div class="user-flexview">
        <div class="div-img">
          <img
            src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/62c25f274decf9001be12655/QnELuh0CJ9Gf2w1CkBEe7.jfif"
          />
        </div>
        <div><h3>Vishnu Vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>+91 1234569870</p></div>
        <div><a href="#">vishnu@medianv</a></div>
        <hr />
        <div>
          <p><small>Line Manager XYZ</small></p>
        </div>
      </div>

      <div class="user-flexview">
        <div class="div-img">
          <img
            src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/62c25f274decf9001be12655/QnELuh0CJ9Gf2w1CkBEe7.jfif"
          />
        </div>
        <div><h3>Vishnu Vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>+91 1234569870</p></div>
        <div><a href="#">vishnu@medianv</a></div>
        <hr />
        <div>
          <p><small>Line Manager XYZ</small></p>
        </div>
      </div>
    </div> -->

    <!-- user card view youtube clone -->
    <div class="video-div">
      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="img1" src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6371a439191add00276f6b5a/7XGvDPewzCy7T6siG3bcp.jpeg" />
        </div>
        <div><h3>vishnu vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>SEO Team Lead</p></div>
        <div><p>+91 123456789</p></div>
        <div><a href="#">vishnu@medianv.com</a></div>
        <div><p><small> Manger XYZ</small></p></div>
      </div>

      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="img1" src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6371a439191add00276f6b5a/7XGvDPewzCy7T6siG3bcp.jpeg" />
        </div>
        <div><h3>vishnu vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>SEO Team Lead</p></div>
        <div><p>+91 123456789</p></div>
        <div><a href="#">vishnu@medianv.com</a></div>
        <div><p><small> Manger XYZ</small></p></div>
      </div>


      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="img1" src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6371a439191add00276f6b5a/7XGvDPewzCy7T6siG3bcp.jpeg" />
        </div>
        <div><h3>vishnu vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>SEO Team Lead</p></div>
        <div><p>+91 123456789</p></div>
        <div><a href="#">vishnu@medianv.com</a></div>
        <div><p><small> Manger XYZ</small></p></div>
      </div>


      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="img1" src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6371a439191add00276f6b5a/7XGvDPewzCy7T6siG3bcp.jpeg" />
        </div>
        <div><h3>vishnu vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>SEO Team Lead</p></div>
        <div><p>+91 123456789</p></div>
        <div><a href="#">vishnu@medianv.com</a></div>
        <div><p><small> Manger XYZ</small></p></div>
      </div>


      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="img1" src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6371a439191add00276f6b5a/7XGvDPewzCy7T6siG3bcp.jpeg" />
        </div>
        <div><h3>vishnu vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>SEO Team Lead</p></div>
        <div><p>+91 123456789</p></div>
        <div><a href="#">vishnu@medianv.com</a></div>
        <div><p><small> Manger XYZ</small></p></div>
      </div>


      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="img1" src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6371a439191add00276f6b5a/7XGvDPewzCy7T6siG3bcp.jpeg" />
        </div>
        <div><h3>vishnu vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>SEO Team Lead</p></div>
        <div><p>+91 123456789</p></div>
        <div><a href="#">vishnu@medianv.com</a></div>
        <div><p><small> Manger XYZ</small></p></div>
      </div>

      <div class="video-preview">
        <div class="thumbnail-row">
          <img class="img1" src="https://storage.googleapis.com/prod-production-5f508e55bb1bb80026996182/profile-images/6371a439191add00276f6b5a/7XGvDPewzCy7T6siG3bcp.jpeg" />
        </div>
        <div><h3>vishnu vasita</h3></div>
        <div><p>ID007</p></div>
        <div><p>SEO Team Lead</p></div>
        <div><p>+91 123456789</p></div>
        <div><a href="#">vishnu@medianv.com</a></div>
        <div><p><small> Manger XYZ</small></p></div>
      </div>

    </div>
  </div>
</template>

<style>
*:focus {
  outline: none;
}
/* .userview {
  display: flex;
  flex-grow: 4;
  flex-wrap: wrap;
}
.user-flexview {
  border-radius: 10px;
  box-shadow: 0 0 2px;
  flex: 1;
  margin: 10px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  margin: 10px;
}
img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
} */

/* user card view css */
.img1 {
  width: 100%;
  border-radius: 50%;
  padding: 50px;
}
p {
    margin: 0;
}
.video-preview {
    box-shadow: 0 0 3px grey;
    padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  vertical-align: top;
  margin-right: 10px;
  width: 100%;
}

.thumbnail-row {
  margin-bottom: 10px;
  position: relative;
}

.video-div {
    margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
}
/* ends here */
.searchbar {
  padding: 2px 10px;
  width: 300px;
  border-radius: 5px;
  border: solid;
  border-width: 1px;
  background: transparent;
}
.search-item {
  width: 250px;
  padding: 3px 7px;
  font-size: 15px;
  margin-left: 5px;
  background: transparent;
  border: none;
}
.searchbar:hover {
  cursor: pointer;
  border-color: green;
  border-style: solid;
}
.container {
  margin: 0;
  height: 100vh;
}
.search-view {
  height: 50px;
  padding: 30px 10px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.search-office-select,
.search-department-select {
  margin-right: 10px;
}

.select-button {
  font-family: "Arial";
  background: transparent;
  padding: 7px 7px;
  border-radius: 5px;
}
.select-button:hover {
  border-color: green;
  cursor: pointer;
}
</style>
