<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>File a Complaint</h1>
          <hr>
          <div class="form-group">
            <label for="email">Mail</label>
            <input
                type="text"
                id="email"
                class="form-control"
                :value="user.email"
                @input="user.email=$event.target.value"

            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
                type="password"
                id="password"
                class="form-control"
                v-model.lazy="user.password"
            >
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
                type="number"
                id="age"
                class="form-control"
                v-model="user.age"
            >
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
          <textarea
              id="message"
              rows="5"
              class="form-control"
              v-model="user.message"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <label for="sendmail">
              <input
                  type="checkbox"
                  id="sendmail"
                  value="SendMail"
                  v-model="sendMail"
              >
              Send Mail
            </label>
            <label for="sendInfomail">
              <input
                  type="checkbox"
                  id="sendInfomail"
                  value="SendInfoMail"
                  v-model="sendMail"
              > Send Infomail
            </label>
          </div>

        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input
                type="radio"
                id="male"
                value="Male"
                v-model="gender"
            > Male
          </label>
          <label for="female">
            <input
                type="radio"
                id="female"
                value="Female"
                v-model="gender"
            > Female
          </label>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="priority">Priority</label>
          <select
              id="priority"
              class="form-control"
              v-model="SelectedPriority"
          >
            <option v-for="item in priorities" :selected="item=='Medium'">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <app-switch v-model="dataSwitch"></app-switch>
        </div>
      </div>
      <hr>


      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
              class="btn btn-primary"
              @click.prevent="Submitted"
          >Submit!
          </button>
        </div>
      </div>
    </form>
    <hr>
    <div v-if="isSubmitted" class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail: {{ user.email }}</p>
            <p>Password: {{ user.password }}</p>
            <p>Age: {{ user.age }}</p>
            <p style="white-space: pre">Message:{{ user.message }} </p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">
                {{ item }}
              </li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ SelectedPriority }}</p>
            <p>Switched: {{ dataSwitch }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appSwitch from "./Switch.vue"

export default {
  components: {
    appSwitch: appSwitch
  },
  data: () => {
    return {
      user:
          {

            email: '',
            password: '',
            age: '',
            message: '',
          },
      sendMail: [],
      gender: '',
      priorities: ['High', 'Medium', 'Low'],
      SelectedPriority: 'High',
      dataSwitch: true,
      isSubmitted:false
    }
  },
  methods: {
    submitted() {
      this.isSubmitted=true
    }
  }
}
</script>

<style>

</style>
