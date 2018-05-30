module.exports = function(jobName, branchName = 'master', cb) {
  return (async () => {
    try {
      await this.crumbIssuer()
      this.jenkins.job.get({ name: `${jobName}/${branchName}`, depth: 1 }, (err, data) => {
        if (err) cb(err, null)
        else cb(null, data)
      })
    } catch (e) {
      cb(e, null)
    }
  })()
}
let calbk = () => {

}
module.exports("Dialog",branchName = 'master',calbk)
