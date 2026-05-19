dpOut.split('n').find(l => /error/i.test(l)) || 'unknown'))
}

send('formatting', 20, 'Formatted as FAT32')
await sleep(2500)
await sleep(2500)

// Mount ISO
send('mounting', 25, 'Moun
send('mounting', 25, 'Mounting ISO')
await runCmd(`powershell -NoProfile -Command "Mount-DiskImage
Command "Mount-DiskImage -ImagePath '${isoPath}'"`)

let isoLetter = null
for (let i = 0; i < 10; i++) {
    const out = execSync(
        `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
        const out = execSync(
            `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
            const out = execSync(
                `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                const out = execSync(
                    `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                    const out = execSync(
                        `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                        const out = execSync(
                            onst { spawn, execSync } = require('child_process')
const fs = require('fs')
                            `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                            
                            

                            


                            { stdio: ['ignore', 'pipe', 'ignore'] }
).toString()
for (const line of out.split(/[rn]+/)) {
const m = line.trim().match(/^([A-Z])$/

} catch (_) {}
return used
}

return used
}

function findFreeLetter(used, candidates) {

    \function findFreeLetter(used, candidates) {
        for (const l of candidates) {
        if (!used.has(l.toUpperCase())) return l.toUpperCasefunction findFreeLetter(used, candidates) {
            for (const l of candidates) {
            ifdpOut.split('n').find(l => /error/i.test(l)) || 'unknown'))
        }
        
        send('formatting', 20, 'Formatted as FAT32')
        await sleep(2500)
        await sleep(2500)
        
        // Mount ISO
        send('mounting', 25, 'Moun
        send('mounting', 25, 'Mounting ISO')
        await runCmd(`powershell -NoProfile -Command "Mount-DiskImage
        Command "Mount-DiskImage -ImagePath '${isoPath}'"`)
        
        let isoLetter = null
        for (let i = 0; i < 10; i++) {
            const out = execSync(
                `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                const out = execSync(
                    `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                    const out = execSync(
                        `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                        const out = execSync(
                            `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                            const out = execSync(
                                `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                                const out = execSync(
                                    onst { spawn, execSync } = require('child_process')
        const fs = require('fs')
                                    `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                                    
                                    
        
                                    
        
        
                                    { stdio: ['ignore', 'pipe', 'ignore'] }
        ).toString()
        for (const line of out.split(/[rn]+/)) {
        const m = line.trim().match(/^([A-Z])$/
        
        } catch (_) {}
        return used
        }
        
        return used
        }
        
        function findFreeLetter(used, candidates) {
        
            \function findFreeLetter(used, candidates) {
                for (const l of candidates) {
                if (!used.has(l.toUpperCase())) return l.toUpperCasefunction findFreeLetter(used, candidates) {
                    for (const l of candidates) {
                    if (!used.has(l.toUpperCase())) return l.toUpperCase()()
        
                    
                    
        
                    
        function runDiskpart(scriptPath) {
            return new Promise((resolve, reject) => {
            const proc = spawn('
            
        
                
            shell: false })
            let stdout = '', stderr = ''
            proc.stdout?.on('da
            shell: false })
            let stdout = '', stderr = ''
            proc.stdout?.on('da
        
            shell: false })
            let stdout = '', stderr = ''
            proc.stdout?.on('daproc.stdout?.on('data', d => stdout += d.toString()) proc.stderr?.on('data', d => stderr += d.toString()) proc.
        
            
            
        
            
        
                
            setInterval(() => { try { const copied = getDirSize(dest) if (totalSize > 0 && onProgress) { const pct = Math.min(Math.round((copied / totalS
            nProgress({ pct, copied, total: totalSize }) } } } catch (_) {} }, 1000) const proc = spawn('robocopy', [ src, dest, '/E', '/COPY:DAT', '/R:1', '/W
        
            '/COPY:DAT', '/R:1', '/W:1', '/NP', '/NFL', '/NDL', '/NC', '/NJH', '/NJS', '/MT:8', ], { shell: false }) let out = '' proc.stdout.on('data', d => out +=
        
            out = '' proc.stdout.on('data', d => out += d.toString()) prout = '' proc.stdout.on('data', d => out += d.toString()) proc.on('close', code => { clearInterval(timer) if (code < 8) { if (onProgress) onProgress({ pct: 10oc.on('close', code => { clearInterval(timer) if (code < 8) { if (onProgress) onProgress({ pct: 10
        
                onst os = require('os')
        
        const platform = os.platform()
        
        function bytesToSize(bytes) {
            dpOut.split('n').find(l => /error/i.test(l)) || 'unknown'))
        }
        
        send('formatting', 20, 'Formatted as FAT32')
        await sleep(2500)
        await sleep(2500)
        
        // Mount ISO
        send('mounting', 25, 'Moun
        send('mounting', 25, 'Mounting ISO')
        await runCmd(`powershell -NoProfile -Command "Mount-DiskImage
        Command "Mount-DiskImage -ImagePath '${isoPath}'"`)
        
        let isoLetter = null
        for (let i = 0; i < 10; i++) {
            const out = execSync(
                `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                const out = execSync(
                    `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                    const out = execSync(
                        `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                        const out = execSync(
                            `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                            const out = execSync(
                                `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                                const out = execSync(
                                    onst { spawn, execSync } = require('child_process')
        const fs = require('fs')
                                    `powershell -NoProfile -Command "(Get-DiskImage -ImagePath '${isoPath}' |
                                    
                                    
        
                                    
        
        
                                    { stdio: ['ignore', 'pipe', 'ignore'] }
        ).toString()
        for (const line of out.split(/[rn]+/)) {
        const m = line.trim().match(/^([A-Z])$/
        
        } catch (_) {}
        return used
        }
        
        return used
        }
        
        function findFreeLetter(used, candidates) {
        
            \function findFreeLetter(used, candidates) {
                for (const l of candidates) {
                if (!used.has(l.toUpperCase())) return l.toUpperCasefunction findFreeLetter(used, candidates) {
                    for (const l of candidates) {
                    if (!used.has(l.toUpperCase())) return l.toUpperCase()()
        
                    
                    
        
                    
        function runDiskpart(scriptPath) {
            return new Promise((resolve, reject) => {
            const proc = spawn('
            
        
                
            shell: false })
            let stdout = '', stderr = ''
            proc.stdout?.on('da
            shell: false })
            let stdout = '', stderr = ''
            proc.stdout?.on('da
        
            shell: false })
            let stdout = '', stderr = ''
            proc.stdout?.on('daproc.stdout?.on('data', d => stdout += d.toString()) proc.stderr?.on('data', d => stderr
            
            
            const { fetchCatalog, flattenCatalog, findVersion } = require('./core/catalog')
const { listUsbDrives, platform } = require('./core/usb')
+= d.toString()) proc.
        

const { downloadIso } = require('./core/download')
require('./core/download')

const program = new Command()
const program = new Command()

const version = require('../package.json').version || '0.1.0'


require('../package.json').version || '0.1.0'

program
.name('flashos')


system ISOs to USB drives')
.version(version)

.version(version)

// ── Helpers
// ── Helpers ────────────────────────────────────────────────────────────────



──────

function logo() {
console.log(chalk.cyan(`
⬡ FlashOS CLI v${version}


`))
}


function bytesToSize(bytes) {
    if (!bytes) return '?'
    let n = bytes
let i = 0
while (n >= 1024 && i < units.length - 1) { n /= 1024; i++ }


1024; i++ }
return `${n.toFixed(1)} ${units[i]}`
}



}


// ── `flashos list` ────────────────────────
program
.command('list')


.description('List all available operating systems')
.option('-c, --category ', 'Filter by category (windows / linux / other)')


.option('-s, --search ', 'Search by name or version')
version')
.option('--json', 'Output as JSON')
.action(async (opts) => {
    .action(async (opts) => {
        const spinner = opts.json ? null : ora('Fetching catalog...').start()
        try {



            ry {
                const data = await fetchCatalog()
                if (spinner) spinner.stop()
                
                let osList = data.catalog


                let osList = data.catalog
if (opts.category) {
osList = osList.filter(o => o.ca
    osList = osList.filter(o => o.category === opts.category)
}
const q = opts.search.toLowerCase()
osList = osList.filter(o => {
const hay = (o.name + ' ' + o.description + ' ' +


const hay = (o.name + ' ' + o.description + ' ' +
(o.editions || []).map(e => e.name + ' ' + (e.versions || []).map(v => v.label).join(' ')).join(' ')
).toLowerCase()


})
}

}

if (opts.json) {
console.log(JSON.stringify(osList, null
}

console.log(chalk.bold(`n ${osList.length}


console.log(chalk.bold(`n ${osList.length} operating system(s):n`))
for (const os of osList) {
const cat = chalk.gray(`[${os.category}]`)
console.log(` ${chalk.cyan('●')}


const cat = chalk.gray(`[${os.category}]`)
console.log(` ${chalk.cyan('●')} ${chalk.bold(os.name)} ${cat}
console.log(` ${chalk.cyan('●')} ${chalk.bold(os.name)} ${cat}`)
console.log(chalk.gray(` ${os.description}`))
for (const ed of (os.editions || [])) {
    for (const v of (ed.versions || [])) {


        halk.yellow(v.id)} ${chalk.gray(`${v.label} · ${v.size}`)}`)
}
}


}
} catch (e) {
if (spinner) spinner.fail(e.mess
    if (spinner) spinner.fail(e.message)
else console.error(e.message)
process.exit(1)
}
})



/ ── `flashos drives` ───────────────────────────────────────────────────────
program
.command('drives')


.option('--json', 'Output as JSON')
.action(async (opts) => {
const drives = listUsbDrives()
const drives = listUsbDrives()
if (opts.json) {
console.log(JSON.stringify(drives, null
    return
}
if (drives.length === 0) {


    console.log(chalk.yellow('n No USB drives detected.n'))
return
}


drive(s) connected:n`))
for (const d of drives) {
console.log(` ${chalk.cyan('●')
for (const d of drives) {
    console.log(` ${chalk.cyan('●')} ${chalk.bold(d.name)}`)
    console.log(` ${chalk.gray('Device:')} ${d.device}`)
console.log(` ${chalk.gray('Size: ')} ${d.size || bytesToSize(d.sizeBytes)}`)


bytesToSize(d.sizeBytes)}`)
console.log()
}
})


}
})


// ── `flashos download` ────────────────────────
program
.command('download ')
.description('Download an ISO without flashing')


lashing')
.option('-e, --edition ', 'Edition (e.g. desktop, server)')
.option('-V, --release ', 'Version (e.g. 24.04)')
.action(async (osArg, opts) => {


    logo()
const spinner = ora('Fetching 
logo()
const spinner = ora('Fetching 
const item = findVersion(data.catalog, osArg, opts.edition, opts.release)
if (!item) {


    console.error(chalk.red(`✗ Could not find ${osArg}${opts.edition ? '/' + opts.edition : ''}${opts.release ? '/' + opts.release : ''}`))
process.exit(1)
}


${chalk.bold(item.displayName)} ${chalk.gray(item.label)}n`)
${chalk.gray(item.label)}n`)
const dlSpinner = ora('Starting
const dlSpinner = ora('Starting download...').start()
const dest = await downloadIso({
url: item.downloadUrl,


url: item.downloadUrl,
filename: item.filename,
onProgress: ({ pct, downloaded, total, speed, cached }) => {
if (cached) {


    if (cached) {
        dlSpinner.succeed(chalk.green('Cache hit — already downloaded'))
        already downloaded'))
return
}


${bytesToSize(downloaded)} / ${bytesToSize(total)} ${speed} KB/s`
}
})


}
})
dlSpinner.succeed(chalk.gree
})
dlSpinner.succeed(chalk.green('Download complete'))
console.log(`n ${chalk.gray('Saved to:
} catch (e) {
    spinner.fail(e.message)
    process.exit(1)
    }



    process.exit(1)
}
})

// ── `flashos flash`



// ── `flashos flash`

// ── `flashos flash` ─────────────────────────────────────────────────────
.command('flash [os]')
.description('Download and flash an ISO to a USB drive')


.option('-e, --edition ', 'Edition (e.g. desktop, server)')
.option('-V, --release ', 'Version')
.option('-d, --device ', 'USB


.option('-d, --device ', 'USB device (e.g. /dev/sdb or PhysicalDrive3)')
.option('-y, --yes', 'Skip confirm
.option('-y, --yes', 'Skip confirmation prompts')
.action(async (osArg, opts) => {
logo()

// If no OS specified, run interactive mode
if (!osArg) return interactiveFlash()

const spinner = ora('Fetching catalog...').st



const spinner = ora('Fetching catalog...').start()
try {
const data = await fetchCatalog()
spinner.stop()



const item = findVersion(data.catalog, osArg, opts.edition, opts.release)
if (!item) {
    if (!item) {
        console.error(chalk.red(`✗ Could not find ${osArg}`))
        process.exit(1)
        process.exit(1)
}

// Pick drive (provided or interactive)


/ Pick drive (provided or interactive)
let drive
if (opts.device) {
const drives = listUsbDrives()


if (!drive) {
    console.error(chalk.red(`✗ Device ${opts.device} not found or is 
    console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)


console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
ed
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)
console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

console.error(chalk.red(`✗ Device ${opts.device} not found or is not a USB drive`))
process.exit(1)

/ Pick drive (provided or interactive)
let drive
if (opts.device) {
const drives = listUsbDrives()
const spinner = ora('Fetching catalog...').start()
try {
const data = await fetchCatalog()
spinner.stop()

.option('-e, --edition ', 'Edition (e.g. desktop

    option('-e, --edition ', 'Edition (e.g. desktop, server)')
.option('-V, --release ', 'Version')
.option('-d, --device ', 'USB device (e.g.
    process.exit(1)
}
})

// ── `flashos flash`
dlSpinner.text = `${pct}% ${bytesToSize(downloaded)} /

${bytesToSize(downloaded)} / ${bytesToSize(total)} ${speed} KB/s`
}
})

url: item.downloadUrl,
filename: item.filename,
onProgress: ({ pct, downloaded, total, speed, cached }) => {
if (cached) {
console.error(chalk.red(`✗ Could not find

console.error(chalk.red(`✗ Could not find ${osArg}${opts.edition ? '/' + opts.edition : ''}${opts.release ? '/' + opts.release : ''}`))
process.exit(1)
}

lashing')
.option('-e, --edition ', 'Edition (e.g. desktop, server)')
.option('-V, --release ', 'Version (e.g. 24.04)')
.action(async (osArg, opts) => {

bytesToSize(d.sizeBytes)}`)
console.log()
}
})
console.log(chalk.yellow('n No USB drives

console.log(chalk.yellow('n No USB drives detected.n'))
return
}
// ── `flashos drives`

/ ── `flashos drives` ───────────────────────────────────────────────────────
program
.command('drives')
        console.log(` ${chalk.dim('└─')} ${chalk.yellow(os.id)}/${chalk.yellow(ed.id)}/${chalk.yellow(v.id)} ${chalk.gray(`${v.label} ·

        halk.yellow(v.id)} ${chalk.gray(`${v.label} · ${v.size}`)}`)
}
}

console.log(chalk.bold(`n ${osList.length} operating system(s):n`))
for (const os of osList) {
const cat = chalk.gray(`[${os.category}]`)
console.log(` ${chalk.cyan('●')}
(o.editions || []).map(e => e.name + ' ' +

const hay = (o.name + ' ' + o.description + ' ' +
(o.editions || []).map(e => e.name + ' ' + (e.versions || []).map(v => v.label).join(' ')).join(' ')
).toLowerCase()
            ry {
                const data = await fetchCatalog()
                if (spinner) spinner.stop()
                
                let osList = data.catalog
.description('List all available operating systems')

systems')
.option('-c, --category ', 'Filter by category (windows / linux / other)')
.option('-s, --search ', 'Search by name or

1024; i++ }
return `${n.toFixed(1)} ${units[i]}`
}

──────

function logo() {
console.log(chalk.cyan(`
⬡ FlashOS CLI v${version}

require('../package.json').version || '0.1.0'

program
.name('flashos')
            
            
        
            
        
                
            setInterval(() => { try { const copied = getDirSize(dest) if (totalSize > 0 && onProgress) { const pct = Math.min(Math.round((copied / totalS
            nProgress({ pct, copied, total: totalSize }) } } } catch (_) {} }, 1000) const proc = spawn('robocopy', [ src, dest, '/E', '/COPY:DAT', '/R:1', '/W
        
            '/COPY:DAT', '/R:1', '/W:1', '/NP', '/NFL', '/NDL', '/NC', '/NJH', '/NJS', '/MT:8', ], { shell: false }) let out = '' proc.stdout.on('data', d => out +=
        
            out = '' proc.stdout.on('data', d => out += d.toString()) prout = '' proc.stdout.on('data', d => out += d.toString()) proc.on('close', code => { clearInterval(timer) if (code < 8) { if (onProgress) onProgress({ pct: 10oc.on('close', code => { clearInterval(timer) if (code < 8) { if (onProgress) onProgress({ pct: 10
        
                onst os = require('os')
        
        const platform = os.platform()
        
        function bytesToSize(bytes) {
    ReactDOM.create(document. .Command)                 (!used.has(l.toUpperCase())) return l.toUpperCase()()

            
            

            
function runDiskpart(scriptPath) {
    return new Promise((resolve, reject) => {
    const proc = spawn('
    

        
    shell: false })
    let stdout = '', stderr = ''
    proc.stdout?.on('da
    shell: false })
    let stdout = '', stderr = ''
    proc.stdout?.on('da

    shell: false })
    let stdout = '', stderr = ''
    proc.stdout?.on('daproc.stdout?.on('data', d => stdout += d.toString()) proc.stderr?.on('data', d => stderr += d.toString()) proc.

    
    

    

        
    setInterval(() => { try { const copied = getDirSize(dest) if (totalSize > 0 && onProgress) { const pct = Math.min(Math.round((copied / totalS
    nProgress({ pct, copied, total: totalSize }) } } } catch (_) {} }, 1000) const proc = spawn('robocopy', [ src, dest, '/E', '/COPY:DAT', '/R:1', '/W

    '/COPY:DAT', '/R:1', '/W:1', '/NP', '/NFL', '/NDL', '/NC', '/NJH', '/NJS', '/MT:8', ], { shell: false }) let out = '' proc.stdout.on('data', d => out +=

    out = '' proc.stdout.on('data', d => out += d.toString()) prout = '' proc.stdout.on('data', d => out += d.toString()) proc.on('close', code => { clearInterval(timer) if (code < 8) { if (onProgress) onProgress({ pct: 10oc.on('close', code => { clearInterval(timer) if (code < 8) { if (onProgress) onProgress({ pct: 10

        onst os = require('os')

const platform = os.platform()

function bytesToSize(bytes) {
    