const app = {
    initialize() {
        console.log()
        console.log('\n' + `%c[service] ${arguments.callee.name}() running! \n` + ' ', 'color: #00d400; font-weight: bold');
        this.cached();

        this.collapseInit();
    },

    cached() {
        console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');

        // Put cache elements here
        this.collapseTrigger = document.querySelectorAll('[data-collapse-trigger]');
        this.collapseTarget = document.querySelectorAll('[data-collapse-target]');
    },

    collapseInit() {
        console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');

        let targetName = '';
        this.collapseTrigger.length !== 0 ? console.log(`\tcollapse triggers available`) : console.log(`\tno collapse triggers`);
        this.collapseTrigger.forEach((trigger) => {
            trigger.addEventListener("click", (() => {
                this.collapseDo(trigger.dataset.collapseTrigger);
                console.log(`eventlistener added ${trigger.dataset.collapseTrigger}`)
            }));

            if (trigger.classList.contains('trigger-resting') == false) {
                console.log(`\tNo class trigger-resting`)
                trigger.classList.add('trigger-resting');
            }
        });

        this.collapseTarget.forEach((collapse) => {
            if (collapse.classList.contains('collapse') == false) {
                console.log(`\tNo class collapse`)
                collapse.classList.add('collapse', '');
            }
        })
    },

    collapseDo(target) {
        console.log(`%c[service] ${arguments.callee.name}()`, 'font-weight: bold');

        target = document.querySelector(`[data-collapse-target='${target}']`);

        if (target.classList.contains('show') == false) {
            target.classList.add('show');
            target.classList.remove('hidden');

        } else {
            target.classList.remove('show');
            target.classList.add('hidden');
        }
    }
}