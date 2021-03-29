<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">
                    {{ comment.content }}
                </div>
                <div class="card-footer mb-2 text-muted">{{ momentAgo }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from "moment";

export default {
    props: ['comment'],

    computed: {


        momentAgo() {
            return moment(this.comment.created_at).fromNow();
        },
    },
};
</script>
