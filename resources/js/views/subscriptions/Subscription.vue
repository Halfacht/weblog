<template>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h1>Subscribe to our premium content</h1>
            </div>
        </div>

        <div v-if="!user.subscribed" class="row justify-content-center my-4">
            <div class="col-4 text-center">
                <p class="text-info">Clicking this button will automatically subtract 10 euros from your bank account,
                    and 10 more for each month you stay subscribed</p>
                <button class="btn btn-success" @click="subscribe">Subscribe</button>
            </div>
        </div>

        <div v-else class="row justify-content-center my-4">
            <div class="col-4 text-center">
                <p class="text-info">Clicking this button will stop the automatic payments, but will stop you from
                    seeing our amazing content after the end date of the subscription.</p>
                <button class="btn btn-warning" @click="unsubscribe">Unsubscribe</button>

            </div>
        </div>


        <success-message :message="successMessage"></success-message>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import SuccessMessage from '../../components/parts/SuccessMessage'

export default {
    components: {SuccessMessage},

    data() {
        return {
            successMessage: '',
        }
    },

    computed: {
        ...mapGetters(['user']),
    },

    methods: {
        subscribe() {
            this.$store.dispatch('addSubscription')
                .then((response) => this.successMessage = response.data.message);
        },
        unsubscribe() {
            this.$store.dispatch('removeSubscription')
                .then((response) => this.successMessage = response.data.message);
        }
    }
}
</script>
