class Snowflake {
    constructor(position, radius, gravity) {
        this.pos = position;
        this.rad = radius;
        this.grav = gravity;
        this.rad_max = radius;
        this.rad_change = true;
        this.color = [255, 255, 255];
    }

    controller(height, width) {
        this.update_pos(height, width);
        this.update_rad();
        this.update_color(height);
    }

    update_pos(height, width) {
        if (this.pos[1] < height + this.rad) {
            this.pos = [this.pos[0] + Math.floor(Math.random() * 3) - 1, this.pos[1] + this.grav];
        } else {
            this.respawn(width);
        }
    }

    update_rad() {
        if (this.rad_change) {
            this.rad = Math.floor(Math.random() * (this.rad_max - 1)) + 1;
            this.rad_change = false;
        } else {
            this.rad_change = true;
        }
    }

    update_color(height) {
        const rgb = 250 - Math.floor(100 * (this.pos[1] / height));
        this.color = [rgb, rgb, rgb];
    }

    respawn(width) {
        this.pos = [Math.floor(Math.random() * width), -1 * this.rad];
    }
}

// Example usage:
const snowflake = new Snowflake([100, 100], 5, 1);
snowflake.controller(600, 800);
console.log(snowflake);
