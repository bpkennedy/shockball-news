<template>
    <v-container fluid class="submit-article-view pa-6">
        <v-row align="start" justify="center">
            <v-col cols="12">
                <v-card>
                    <v-list-item-title class="headline mb-1 px-4 pt-4">Submit News Article</v-list-item-title>
                    <v-list-item-subtitle class="px-4">Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>

                    <v-form
                            ref="form"
                            v-model="valid"
                            :lazy-validation="lazy"
                            class="pa-4"
                    >
                        <v-text-field
                                v-model="title"
                                :rules="titleRules"
                                label="Article Title*"
                                required
                        ></v-text-field>

                        <v-text-field
                                v-model="author"
                                :rules="authorRules"
                                label="Author Name*"
                                :messages="['Star Wars Combine handle']"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="authorRole"
                                :rules="authorRoleRules"
                                label="Author Role"
                                :messages="['Optional in-character description of the author\'s role (i.e. PGEN Staff Writer, Tatooine Sandstorm Head Coach, etc.)']"
                        ></v-text-field>

                        <v-text-field
                                v-model="articleImageUrl"
                                :rules="articleImageUrlRules"
                                label="Article Image/Video URL"
                                :messages="['Optional url address for a header image/video to be shown for your article']"
                        ></v-text-field>
                        <v-text-field
                                v-model="articleImageSubtitle"
                                :rules="articleImageSubtitleRules"
                                label="Article Image/Video subtitle"
                                :messages="['Optional subtitle to be used with your header image/video']"
                        ></v-text-field>
                    </v-form>
                    <v-card-actions class="px-4 pb-4">
                        <v-btn @click="validate" :disabled="!valid" color="primary">Submit</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: 'SubmitArticleView',
        components: {
        },
        data() {
            return {
                valid: true,
                name: '',
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
                ],
                email: '',
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                select: null,
                items: [
                    'Item 1',
                    'Item 2',
                    'Item 3',
                    'Item 4',
                ],
                checkbox: false,
                lazy: false,
            }
        },
        methods: {
            validate () {
                this.$refs.form.validate()
            },
        },
        created() {
        }
    }
</script>

<style lang="scss" scoped>
    .submit-article-view {
        width: 40rem;
    }
</style>
