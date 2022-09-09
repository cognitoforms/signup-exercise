<template>
  <h1>signup</h1>
  <form v-if="!submitted" class="fields" @submit="handleSubmit">
    <label>
      <span>Name</span>
      <input name="name" autocomplete="prevent" type="text" class="invalid" />
      <div class="error">Please enter your name.</div>
    </label>
    <label>
      <span>Email</span>
      <input name="email" autocomplete="prevent" type="email" />
    </label>
    <label>
      <span>Password</span>
      <input name="password" type="password" />
    </label>
    <label>
      <span>Confirm Password</span>
      <input name="confirmPassword" type="password" />
    </label>
    <button type="submit">sign up</button>
  </form>
  <div class="confirmation" v-else>
    Thanks for signing up!
  </div>
</template>

<script>
import { isValidPassword, isValidEmail } from '../validators';

export default {
  props: {
    prefilledEmail: { type: String, required: false }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      errors: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      submitted: false
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      // needs validation
      this.submitted = true;
    }
  }
}
</script>

<style lang="scss" scoped>
$error: rgb(173, 53, 40);

button {
  background-color: #09a098;
  color: white;
  width: 100%;

  &:hover {
    border-color: orangered;
  }
}

.confirmation {
  padding: 1em;
  border-radius: 5px;
  background-color: rgba(57, 199, 57, 0.315);
  color: darkgreen;
}

.fields {
  text-align: left;
  width: 200px;

  .error {
    border-radius: 0 0 4px 4px;
    margin-top: -2px;
    width: 100%;
    background: $error;
    padding: .25em;
    color: white;
  }

  label {
    display: block;
    margin-bottom: 1em;

    span {
      display: block;
    }

    input {
      width: 100%;

      &:invalid,
      &.invalid {
        border-color: $error;
      }
    }
  }


}
</style>
