// IPv4(X.X.X.X)形式のIPアドレスをNumber型に変換する
const ip2long = (ip) => parseInt(
    ip.split(".").map(e => Number(e).toString(2).padStart(8, '0')).join(''), 2)

const inRange = (remoteIp, acceptIp, cidr) => {
    cidr = Number(cidr)
    const remoteIpNetwork = remoteIp >>> (32 - cidr)
    const acceptIpNetwork = acceptIp >>> (32 - cidr)
    return remoteIpNetwork === acceptIpNetwork
}
// 短くするとこう書ける
// const inRange = (remoteIp, acceptIp, cidr) => remoteIp >>> (32 - Number(cidr)) === acceptIp >>> (32 - Number(cidr))

console.log(`192.168.0.1 は 192.168.0.254/24 に含まれ${ inRange(ip2long("192.168.0.1"), ip2long("192.168.0.254"), 28) ? 'ます' : 'ません' }`)
// 192.168.0.1 は 192.168.0.254/24 に含まれます
console.log(`192.168.1.0 は 192.168.0.254/24 に含まれ${ inRange(ip2long("192.168.1.0"), ip2long("192.168.0.254"), 24) ? 'ます' : 'ません' }`)
// 192.168.1.0 は 192.168.0.254/24 に含まれません

console.log(ip2long("10.168.1.0"))
console.log(ip2long("192.168.0.254"))

cidr = Number(24)
const remoteIpNetwork = ip2long("192.168.1.0") >>> (32 - cidr)
const acceptIpNetwork = ip2long("192.168.0.254") >>> (32 - cidr)

console.log(remoteIpNetwork, acceptIpNetwork)