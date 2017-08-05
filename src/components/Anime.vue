<template>
    <div class="action">
        <div class="preview">
            <div class="move multiple-timing">
                <div class="el"></div>
            </div>
        </div>
        <div class="setting">
            <div class="parameter">
                <div class="param-name">Duration</div>
                <div class="param-value">
                    <vue-slider ref="slider" :min=1 :max="2000" v-model="duration"></vue-slider>
                </div>
            </div>
            <div class="parameter">
                <div class="param-name">Scale</div>
                <div class="param-value">
                    <vue-slider ref="slider" :min="1" :max="5" v-model="scale"></vue-slider>
                </div>
            </div>
            <div class="parameter">
                <div class="param-name">Rotate</div>
                <div class="param-value">
                    <vue-slider ref="slider" :min="0" :max="720" v-model="rotate"></vue-slider>
                </div>
            </div>
            <div class="parameter">
                <div class="param-name">TranslateX</div>
                <div class="param-value">
                    <vue-slider ref="slider" :min="-200" :max="200" v-model="translateX"></vue-slider>
                </div>
            </div>
            <div class="parameter">
                <div class="param-name">TranslateY</div>
                <div class="param-value">
                    <vue-slider ref="slider" :min="-200" :max="200" v-model="translateY"></vue-slider>
                </div>
            </div>
            <div class="parameter">
                <div class="param-name">Opacity</div>
                <div class="param-value">
                    <vue-slider ref="slider" :min="0.1" :max="1" :interval="0.1" v-model="opacity"></vue-slider>
                </div>
            </div>
            <div class="referrer">
                <div class="referrer-name">
                    <a href="https://github.com/tkc/anime-js-sandbox" target="_blank">GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import anime from 'animejs'
    import vueSlider from 'vue-slider-component'

    export default {
        name: 'app',
        components: {
            vueSlider
        },
        data() {
            return {
                anime: "",
                duration: 1000,
                scale: 1,
                translateX: 0,
                translateY: 0,
                rotate: 360,
                opacity: 0.8
            };
        },
        watch: {
            scale(v) {
                this.anime.animations.forEach(animation => {
                    if (animation.property === 'scale') {
                        this.anime.animations[0].tweens[0].to.numbers[0] = v;
                        this.anime.animations[0].tweens[0].to.original = v;
                        this.anime.animations[0].tweens[0].value = v;
                    }
                });
            },
            rotate(v) {
                this.anime.animations.forEach(animation => {
                    if (animation.property === 'rotate') {
                        animation.tweens[0].to.numbers[0] = v;
                        animation.tweens[0].to.original = v;
                        animation.tweens[0].value = v;
                    }
                });
            },
            translateX(v){
                this.anime.animations.forEach(animation => {
                    if (animation.property === 'translateX') {
                        animation.tweens[0].to.numbers[0] = v;
                        animation.tweens[0].to.original = v;
                        animation.tweens[0].value = v;
                    }
                });
            },
            translateY(v){
                this.anime.animations.forEach(animation => {
                    if (animation.property === 'translateY') {
                        animation.tweens[0].to.numbers[0] = v;
                        animation.tweens[0].to.original = v;
                        animation.tweens[0].value = v;
                    }
                });
            },
            opacity(v){
                this.anime.animations.forEach(animation => {
                    if (animation.property === 'opacity') {
                        animation.tweens[0].to.numbers[0] = v;
                        animation.tweens[0].to.original = v;
                        animation.tweens[0].value = v;
                    }
                });
            },
            borderRadius(v) {
                this.anime.borderRadius = v;
            },
            duration(v) {
                this.anime.duration = v;
            },
        },
        mounted () {
            this.anime = anime({
                targets: '.multiple-timing',
                scale: this.scale,
                direction: this.duration,
                translateX: this.translateX,
                translateY: this.translateY,
                rotate: this.rotate,
                duration: this.duration,
                opacity: this.opacity,
                easing: 'easeOutElastic',
                backgroundColor: '#FFF',
                loop: true
            });
        },
    }
</script>

<style scoped></style>
