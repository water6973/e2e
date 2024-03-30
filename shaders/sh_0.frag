#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    float r = fract(sin(st.x*st.y*43985.45334)*st.x*st.y*40398.25342);
    vec3 color = vec3(0.);

    color*=vec3(r*sin(u_time*st.x*st.y));

    gl_FragColor = vec4(color,1.0);
}
