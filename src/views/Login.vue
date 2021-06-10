<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <h3 class="mb-3">Login</h3>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control" placeholder="Email">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="btn btn-primary btn-block">Login</div>
                        </form>
                    </div>
                    <div class="card-footer">
                        <div>
                            <span class="text-muted">
                                Don't have an account?    
                            </span> 
                            <a href="#">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>